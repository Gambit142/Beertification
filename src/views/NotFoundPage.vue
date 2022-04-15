<template>
  <ErrorPage />
</template>

<script>
import { defineComponent } from 'vue'

// Components
import ErrorPage from '../components/ErrorPage.vue'

export default defineComponent({
  name: 'NotFoundPage',

  components: {
    ErrorPage
  }
})
</script>
