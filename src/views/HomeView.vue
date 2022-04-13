<template>
  <IndexPage :showTextField="showTextField" />
</template>

<script>
import { defineComponent } from 'vue'

// Components
import IndexPage from '../components/IndexPage.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    IndexPage
  },
  props: ['showTextField']
})
</script>
