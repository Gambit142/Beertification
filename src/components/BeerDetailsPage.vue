<template>
  <p>{{name}}</p>
</template>

<script>
export default {
  name: 'BeerDetailsPage',
  data () {
    return {
      pageId: this.$route.params.id,
      beerObj: {}
    }
  },
  methods: {
    async fetchSingleBeer () {
      const URL = `https://api.punkapi.com/v2/beers/${this.pageId}`
      const response = await fetch(URL)
      const data = await response.json()
      return data
    }
  },
  async created () {
    const data = await this.fetchSingleBeer()
    this.beerObj = data[0]
  }
}
</script>
