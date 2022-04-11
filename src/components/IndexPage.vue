<template>
  <v-container>
    <v-row>
      <v-text-field v-model="searchedName" />
      <v-col v-for="beer in filteredBeers" :key="beer.id" cols="2">
        <router-link :to="`/beer/${beer.id}`">
          <article>
          <IndividualBeer :="beer" />
          </article>
        </router-link>
      </v-col>
       <div class="text-center">
        <v-pagination
          v-model="page"
          :length="length"
          :total-visible="7"
          @update:modelValue="handlePaginationChange"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          color="orange"
          rounded="0"
          border="1"
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
    page: 1,
    length: Math.round(305 / 25),
    searchedName: ''
  }),
  components: {
    IndividualBeer
  },
  async created () {
    this.beerArray = await this.fetchBeers()
  },
  computed: {
    filteredBeers () {
      return this.beerArray.filter((beer) => {
        return beer.name.toLowerCase().includes(this.searchedName.toLowerCase())
      })
    },
    perPage () {
      if (window.outerWidth < 600) {
        return 10
      }
      return 25
    }
  },
  methods: {
    async handlePaginationChange () {
      this.beerArray = await this.fetchBeers()
      this.searchedName = ''
    },
    async fetchBeers () {
      const URL = `https://api.punkapi.com/v2/beers?page=${this.page}&per_page=${this.perPage}`
      const response = await fetch(URL)
      const data = await response.json()
      return data.map((beer) => {
        return {
          id: beer.id,
          name: beer.name,
          image: beer.image_url,
          tagline: beer.tagline
        }
      })
    }
  }
}
</script>
