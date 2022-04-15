<template>
  <v-main class="d-flex align-center">
    <DesktopView :image="image"
      :name="name"
      :tagline="tagline"
      :description="description"
      :firstBrewed="firstBrewed"
      :abv="abv"
      :volume="volume"
      :malt="malt"
      :hops="hops"
      :yeast="yeast"
      :foodPairing="foodPairing"
    />
    <MobileView :image="image"
      :name="name"
      :tagline="tagline"
      :description="description"
      :firstBrewed="firstBrewed"
      :abv="abv"
      :volume="volume"
      :malt="malt"
      :hops="hops"
      :yeast="yeast"
      :foodPairing="foodPairing"
      class="d-block d-sm-none"
    />
  </v-main>
</template>

<script>
import DesktopView from './DesktopView.vue'
import MobileView from './MobileView.vue'
export default {
  name: 'BeerDetailsPage',
  components: {
    DesktopView, MobileView
  },
  data () {
    return {
      pageId: this.$route.params.id,
      name: '',
      tagline: '',
      firstBrewed: '',
      description: '',
      image: '',
      abv: null,
      volume: {},
      malt: [],
      hops: [],
      yeast: '',
      foodPairing: []
    }
  },
  methods: {
    async fetchSingleBeer () {
      const URL = `https://api.punkapi.com/v2/beers/${this.pageId}`
      const response = await fetch(URL)
      const data = await response.json()
      return data
    },

    removeDuplicate (arr) {
      const newSet = new Set(arr)
      const cleanArray = []
      newSet.forEach((set) => cleanArray.push(set.name))
      return cleanArray
    }
  },
  async created () {
    const data = await this.fetchSingleBeer()
    this.name = data[0].name
    this.tagline = data[0].tagline
    this.firstBrewed = data[0].first_brewed
    this.description = data[0].description
    this.image = data[0].image_url
    this.abv = data[0].abv.toString(10)
    this.volume = data[0].volume
    this.malt = this.removeDuplicate(data[0].ingredients.malt)
    this.hops = this.removeDuplicate(data[0].ingredients.hops)
    this.yeast = data[0].ingredients.yeast
    this.foodPairing = data[0].food_pairing
  }
}
</script>
