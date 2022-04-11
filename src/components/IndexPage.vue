<template>
  <v-container>
    <v-row>
      <v-col v-for="beer in beerArray" :key="beer.id" cols="2">
        <article>
          <IndividualBeer :="beer" />
        </article>
      </v-col>
       <div class="text-center">
        <v-pagination
          v-model="page"
          :length="15"
          :total-visible="7"
          @update:modelValue="handlePaginationChange"
        ></v-pagination>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import IndividualBeer from './IndividualBeer.vue'
export default {
  name: 'IndexPage',
  data: () => ({
    beerArray: [],
    page: 1
  }),
  components: {
    IndividualBeer
  },
  created () {
    this.fetchBeers()
  },
  methods: {
    handlePaginationChange () {
      this.fetchBeers()
    },
    async fetchBeers () {
      const URL = `https://api.punkapi.com/v2/beers?page=${this.page}&per_page=25`
      const response = await fetch(URL)
      const data = await response.json()
      this.beerArray = data
      this.beerArray.forEach(beer => console.log(beer.id))
      return this.beerArray
    }
  }
}
</script>
