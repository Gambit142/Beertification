<template>
  <IndexPage />
</template>

<script>
import { defineComponent } from 'vue'

// Components
import IndexPage from '../components/IndexPage.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    IndexPage
  }
})
</script>
