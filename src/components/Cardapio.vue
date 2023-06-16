<template>
  <div class="cardapio">
    <section class="items">
      <h4>Selecione os produtos</h4>

      <div
        v-for="produto in produtos"
        :key="produto.id"
        class="produto"
        @click="toggleActive(produto)"
        :class="{ selected: produto.active }"
      >
        <div class="photo">
          <img :src="getImg(produto.photo)" />
        </div>
        <div class="description">
          <span class="name">{{ produto.name }}</span>
          <span class="price">R$ {{ produto.price }}</span>
          <div class="quantity-area">
            <template v-if="produto.active">
              <button
                :disabled="produto.quantity <= 1"
                @click.stop="produto.quantity--"
              >
                -
              </button>
              <span class="quantity">{{ produto.quantity }}</span>
              <button @click.stop="produto.quantity++">+</button>
            </template>
          </div>
        </div>
      </div>
    </section>

    <section class="summary" v-if="total() > 0">
      <strong>Resumo do pedido</strong>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto in produtos" :key="produto.id">
            <template v-if="produto.active">
              <td>{{ produto.quantity + "x " + produto.name }}</td>
              <td>{{ (produto.quantity * produto.price).toFixed(2) }}</td>
            </template>
          </tr>

          <tr>
            <th>Total</th>
            <th>{{ total() }}</th>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
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
  },
  created() {
    this.getProducts();
  },
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

.items {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid lightgrey;
  padding: 20px;
  max-width: 500px;
  min-width: 300px;
  justify-content: center;
}

.produto {
  border: 1px solid lightgrey;
  margin: 6px;
  flex: 0 0 calc(33.333% - 24px);
  cursor: pointer;
  text-align: center;
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

section.items .description .quantity-area {
  margin: 8px auto;
  height: 14px;
}

.quantity-area button {
  width: 16px;
  height: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.quantity {
  font-weight: bold;
  margin: 0 4px;
}

.summary {
  background-color: rgb(245, 245, 245);
  padding: 20px;
  min-height: 200px;
  min-width: 200px;
  text-align: center;
}

.summary table {
  width: 100%;
  padding-top: 12px;
  font-size: 11px;
  margin: auto;
}

.summary table tbody tr:last-of-type th {
  border-top: 1px solid black;
  padding-top: 4px;
}
</style>
