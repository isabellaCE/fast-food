<template>
  <div class="produto">
    <div>
      <span @click="openModal = true">+</span>
    </div>
    <q-dialog v-model="openModal" persistent>
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 q-mr-md">Adicionar produto</div>
          <q-btn icon="close" @click="null" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <q-input
            class="q-mb-sm"
            outlined
            :value="state.name"
            @input="state.name = $event"
            label="Nome"
          />
          <q-input
            class="q-mb-sm"
            outlined
            :value="state.price"
            @input="state.price = $event"
            label="Preço"
          />
          <q-input
            outlined
            :value="state.photo"
            @input="state.photo = $event"
            label="Link da imagem"
          />
        </q-card-section>
        <q-card-section>
          <q-btn class="q-mr-sm" color="red" label="Cancelar" />
          <q-btn color="primary" label="Confirmar" @click="adicionar()" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Modal",
  data() {
    return {
      openModal: false,
      state: {
        id: null,
        photo: "",
        name: "",
        price: null,
        active: false,
        quantity: 1,
      },
    };
  },
  methods: {
    adicionar() {
      axios
        .post(`http://localhost:3000/Produtos/`, this.state)
        .then(() => {
          this.$emit("updateProductList");
          this.openModal = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.produto {
  width: 132px;
  height: 206px;
  border: 1px solid lightgrey;
  margin: 6px;
  cursor: pointer;
  text-align: center;
  padding: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
}
span {
  font-size: 100px;
}
</style>
