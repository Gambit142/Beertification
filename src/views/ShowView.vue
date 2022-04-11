<template>
  <IndividualBeer />
</template>

<script>
import { defineComponent } from 'vue'

// Components
import IndividualBeer from '../components/IndividualBeer.vue'

export default defineComponent({
  name: 'ShowView',

  components: {
    IndividualBeer
  }
})
</script>
