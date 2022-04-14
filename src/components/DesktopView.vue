<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-img :src="image" :alt="`${name} image`" class="bg-white" height="500">
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="orange-darken-3"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col cols="5">
        <div>
          <h1>{{name}}</h1>
          <h2>{{tagline}}</h2>
          <p>{{description}}</p>
        </div>
      </v-col>
      <v-col cols="4">
        <v-card elevation="20">
          <div>
            <v-card-subtitle>Brewed</v-card-subtitle>
            <v-card-subtitle>{{firstBrewed}}</v-card-subtitle>
          </div>
          <div>
            <v-card-subtitle>Vol</v-card-subtitle>
            <v-card-subtitle>{{abv}}%</v-card-subtitle>
          </div>
          <div>
            <v-card-subtitle>Quantity</v-card-subtitle>
            <v-card-subtitle>{{volume.value}} {{volume.unit}}</v-card-subtitle>
          </div>
          <v-divider></v-divider>
          <v-card-title>Ingredients</v-card-title>
          <v-card-subtitle>Malt</v-card-subtitle>
          <v-badge v-for="(ingredient, i) in malt" :key="i"
            :content="ingredient"
            inline
          >
          </v-badge>
          <v-card-subtitle>Hops</v-card-subtitle>
          <v-badge v-for="(ingredient, i) in hops" :key="i"
            :content="ingredient"
            inline
          >
          </v-badge>
          <v-card-subtitle>Yeast</v-card-subtitle>
          <v-badge
            :content="yeast"
            inline
          >
          </v-badge>
          <v-card-actions>
            <v-btn
              color="orange-lighten-2"
              variant="text"
            >
              Drink with
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

              <v-card-text variant="text" v-for="(food, i) in foodPairing" :key="i">
                {{food}}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'DesktopView',
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
