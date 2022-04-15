<template>
  <v-container>
  <v-row align="center" justify="center" class="container">
    <v-col cols="9">
      <v-card elevation="20" theme="dark" class="py-14">
        <h1 class="text-center font-weight-bold text-h1">404</h1>
        <h2 class="text-center font-weight-bold mb-7">ERROR PAGE</h2>
        <p class="text-center text-h6 mb-5 font-weight-bold">OOOPS!!! Page was not found!</p>
        <router-link to="/" class="text-decoration-none">
          <div class="d-flex justify-center">
            <v-btn class="bg-orange-lighten-2">Home Page</v-btn>
          </div>
        </router-link>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'ErrorPage'
}
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
