<template>
  <div>
    <Edit :handleClick="() => (openModal = true)" />
    <q-dialog v-model="openModal" persistent>
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 q-mr-md">Editar produto</div>
          <q-btn
            icon="close"
            @click="cancel()"
            flat
            round
            dense
            v-close-popup
          />
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
            outlined
            :value="state.price"
            @update:value="state.price = $event"
            label="Preço"
          />
        </q-card-section>
        <q-card-section>
          <q-btn
            class="q-mr-sm"
            color="red"
            label="Cancelar"
            @click="cancel()"
          />
          <q-btn
            color="primary"
            label="Confirmar"
            @click="updatestate(state)"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import axios from "axios";
import Edit from "../../public/icons/Edit.vue";
export default {
  name: "Modal",
  components: { Edit },
  props: {
    produto: {
      default: {},
    },
  },
  data() {
    return {
      state: {},
      openModal: false,
    };
  },
  methods: {
    updatestate(produto) {
      axios
        .put(`http://localhost:3000/Produtos/${produto.id}`, produto)
        .then(() => {
          this.$emit("updateProductList");
          this.openModal = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancel() {
      this.$emit("updateProductList");
      this.openModal = false;
    },
  },
  created() {
    this.state = this.produto;
  },
};
</script>
