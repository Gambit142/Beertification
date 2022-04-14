<template>
  <v-container class="container d-block d-sm-none">
    <v-row>
      <v-col cols="6">
        <div class="placeholder d-flex justify-center align-center">
          <img :src="image" :alt="`${name} image`" class="bg-white">
        </div>
      </v-col>
      <v-col cols="6" class="mt-4" align-self="start">
        <h3>{{name}}</h3>
        <div class="d-flex flex-column justify-start px-2 pt-2">
          <v-card-subtitle class="text-subtitle-1 font-weight-bold">Brewed</v-card-subtitle>
          <v-card-subtitle class="text-subtitle-1 font-weight-bold">{{firstBrewed}}</v-card-subtitle>
        </div>
        <div class="d-flex flex-column justify-start px-3 pt-2">
          <v-card-subtitle class="text-subtitle-1 font-weight-bold">Alc Vol</v-card-subtitle>
          <v-card-subtitle class="text-subtitle-1 font-weight-bold">{{abv}}%</v-card-subtitle>
        </div>
        <div class="d-flex flex-column justify-start px-3 pt-2">
          <v-card-subtitle class="text-subtitle-1 font-weight-bold">Quantity</v-card-subtitle>
          <v-card-subtitle class="text-subtitle-1 font-weight-bold">{{volume.value}} {{volume.unit}}</v-card-subtitle>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="container d-block d-sm-none">
    <v-row>
      <v-col cols="12">
        <h1 class="italianno font-weight-bold text-center">{{name}}</h1>
        <h2 class="text-orange-lighten-2 text-center mb-4 font-weight-medium">{{tagline}}</h2>
        <p class="font-weight-bold text-medium-emphasis mt-3">{{description}}</p>
      </v-col>
    </v-row>
  </v-container>
  <v-card elevation="20" class="container d-block d-sm-none">
    <v-card-actions>
      <v-btn
        color="black"
        variant="text"
        class="font-weight-bold text-h6 open-sans"
      >
        Explore More
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text class="text-orange-lighten-2 text-h6 font-weight-bold">Drink With</v-card-text>

        <v-card-text  class="font-weight-bold" variant="text" v-for="(food, i) in foodPairing" :key="i">
          {{food}}
        </v-card-text>

        <v-divider class="mt-5 border"></v-divider>
        <v-card-text class="text-orange-lighten-2 text-h6 font-weight-bold">Ingredients</v-card-text>
        <div class="font-weight-bold open-sans text-center text-subtitle-1 text-medium-emphasis pb-3">Malt</div>
        <div class="d-flex justify-space-around flex-wrap">
          <v-badge v-for="(ingredient, i) in malt" :key="i"
            :content="ingredient"
            inline
            color="#ffb74d"
            text-color="black"
          >
          </v-badge>
        </div>
        <div class="font-weight-bold open-sans text-center text-subtitle-1 text-medium-emphasis py-3">Hops</div>
        <div class="d-flex justify-space-around flex-wrap">
          <v-badge v-for="(ingredient, i) in hops" :key="i"
            :content="ingredient"
            inline
            color="#ffb74d"
            text-color="black"
          >
          </v-badge>
        </div>
        <div class="font-weight-bold open-sans text-center text-subtitle-1 text-medium-emphasis py-3">Yeast</div>
        <div class="d-flex justify-center">
          <v-badge
            :content="yeast"
            inline
            color="#ffb74d"
            text-color="black"
          >
          </v-badge>
        </div>

      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  name: 'MobileView',
  data: () => ({
    show: false
  }),

  props: ['image',
    'name', 'tagline', 'description',
    'firstBrewed', 'abv', 'volume',
    'malt', 'hops', 'yeast',
    'foodPairing'
  ]
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');

h1 {
  font-size: 2.5rem !important;
}

h2 {
  font-size: 1.3rem !important;
}

.container {
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: 5px 10px 8px 10px #888;
}

.placeholder {
  height: 23.25rem;
  padding: 2rem 0;
}

.placeholder img {
  height: 100%;
}

.italianno {
  font-family: 'Italianno', cursive;
}

.open-sans {
  font-family: 'Open Sans', sans-serif !important;
}

.border {
  border: 2px solid !important;
}
</style>
