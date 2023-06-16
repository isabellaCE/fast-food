<template>
  <div class="cardapio">
    <h4>BackOffice</h4>

    <div
      v-for="produto in produtos"
      :key="produto.id"
      class="produto"
      @click="toggleActive(produto)"
    >
      <div class="photo">
        <img :src="getImg(produto.photo)" />
      </div>
      <div class="description">
        <span class="name">{{ produto.name }}</span>
        <span class="price">R$ {{ produto.price }}</span>
        <div class="quantity-area">
          <Trash :handleClick="() => removeProduct(produto.id)" />
          <Edit />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Edit from "@/icons/Edit.vue";
import Trash from "@/icons/Trash.vue";

export default {
  components: { Edit, Trash },
  name: "CardapioPrincipal",
  data() {
    return {
      produtos: {},
    };
  },
  methods: {
    getProducts() {
      axios
        .get("http://localhost:3000/Produtos")
        .then((res) => {
          this.produtos = res.data;
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getImg(img) {
      return require("../img/" + img);
    },
    toggleActive(item) {
      item.active = !item.active;
    },
    total() {
      var total = 0;
      this.produtos.forEach((item) => {
        if (item.active) {
          total += item.price * item.quantity;
        }
      });
      return total.toFixed(2);
    },
    removeProduct(id) {
      axios
        .delete(`http://localhost:3000/Produtos/${id}`)
        .then((res) => {
          this.produtos = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
      window.location.reload(true);
    },
  },
  created() {
    this.getProducts();
  },
  updated() {},
};
</script>
<style scoped>
h4 {
  text-align: center;
  margin-top: 0;
  width: 100%;
}
.cardapio {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 20px;
}

.produto {
  border: 1px solid lightgrey;
  margin: 6px;
  cursor: pointer;
  text-align: center;
  padding: 20px;
}

.selected {
  border: 2px solid rgb(29, 134, 233);
}

.photo img {
  max-width: 90px;
}

.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 11px;
  line-height: 15px;
}

.price {
  font-weight: bold;
  margin: 4px auto;
}

.quantity-area {
  display: flex;
  margin-top: 10px;
}
</style>
