<template>
  <v-container>
    <v-text-field
    v-model="searchedName"
    v-if="showTextField"
    label="Search For Your Favourite Beer"
    variant="outlined"
    clearable
    loading
    placeholder="Start Searching...."
    color="#e65100"
    />
    <v-row>
      <v-col v-for="beer in filteredBeers" :key="beer.id" cols="12" sm="4">
        <section>
          <IndividualBeer :="beer" />
        </section>
      </v-col>
    </v-row>
    <div class="mt-5">
      <v-pagination
        v-model="page"
        :length="length"
        :total-visible="visibleNumber"
        @update:modelValue="handlePaginationChange"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        color="#000"
        rounded="0"
        elevation="6"
        class="pagination"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import IndividualBeer from './IndividualBeer.vue'
export default {
  name: 'IndexPage',
  data: () => ({
    beerArray: [],
    page: 1,
    searchedName: '',
    perPage: window.outerWidth < 600 ? 10 : 24,
    visibleNumber: window.outerWidth < 600 ? 4 : 7,
    length: Math.round(305 / (window.outerWidth < 600 ? 10 : 24))
  }),
  props: ['showTextField'],
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
    }
  },
  methods: {
    async handlePaginationChange () {
      this.beerArray = await this.fetchBeers()
      this.searchedName = ''
    },
    async fetchBeers () {
      try {
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
      } catch (e) {
        console.log(e)
        return []
      }
    }
  }
}
</script>
<style scoped>
 .pagination {
    color: #e65100;
  }
</style>
