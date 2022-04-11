<template>
  <BeerDetailsPage />
</template>

<script>
import { defineComponent } from 'vue'

// Components
import BeerDetailsPage from '../components/BeerDetailsPage.vue'

export default defineComponent({
  name: 'ShowView',

  components: {
    BeerDetailsPage
  }
})
</script>
