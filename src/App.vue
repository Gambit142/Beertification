<template>
  <v-app>
    <v-app-bar image="https://picsum.photos/1920/1080?random">
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(216,67,21,.8), rgba(255,209,128,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon class="light text-h5" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="light text-h5 font-weight-bold ml-3 ml-sm-7">Punk Beers</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" class="light text-h5" icon="mdi-magnify" @click.stop="showTextField = !showTextField"></v-btn>
    </v-app-bar>
    <v-navigation-drawer theme="dark" v-model="drawer" temporary>
      <v-list-item
        class="text-h5"
        color="#ffd180"
        prepend-avatar="https://cdn5.vectorstock.com/i/1000x1000/97/69/realistic-beer-splashes-in-transparent-vector-22899769.jpg"
      >Punk Beers</v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <router-link to="/" class="text-decoration-none">
          <v-list-item
            class="text-h6 font"
            prepend-icon="mdi-view-dashboard"
            color="#ffd180"
          >Home</v-list-item>
        </router-link>
        <v-list-item
          class="text-h6"
          prepend-icon="mdi-forum"
          color="#ffd180"
          >About</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view :showTextField="showTextField" />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: null,
    showTextField: false
  })
}
</script>
<style scoped>
  .light {
    color: #fff !important;
  }
</style>
