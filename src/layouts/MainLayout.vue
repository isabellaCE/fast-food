<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Fast Food </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8"> Menu </q-item-label>
        <q-item clickable tag="a" href="/#/">
          <q-item-section>
            <q-item-label>BackOffice</q-item-label>
            <q-item-label caption>Edite os itens do cardápio</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/cardapio">
          <q-item-section>
            <q-item-label>Cardápio</q-item-label>
            <q-item-label caption>Visualize como o cliente</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
