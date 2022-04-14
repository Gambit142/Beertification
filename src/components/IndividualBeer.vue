<template>
  <v-hover
    v-slot="{ isHovering, props }"
  >
    <v-card :elevation="isHovering ? 14 : 2" v-bind="props" class="rounded-shaped">
      <div class="my-6">
        <v-img :src="image" :alt="`${name} image`" class="bg-white" height="400">
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="orange-darken-3"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </div>
      <div class="d-flex justify-center align-start mb-3 name-height">
        <v-card-title class="text-center text-h6 font-weight-black">{{name}}</v-card-title>
      </div>
      <div class="d-flex justify-center align-start tagline-height">
        <v-card-subtitle class="text-medium-emphasis text-h6 text-center">{{tagline}}</v-card-subtitle>
      </div>
      <router-link :to="`/beer/${id}`" class="text-decoration-none">
        <div class="d-flex justify-center mt-5 mt-sm-0">
          <v-btn
          variant="outlined"
          rounded="lg"
          class="bg-orange-accent-1 font-weight-black btn"
          block
          >See Details
          </v-btn>
        </div>
      </router-link>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'IndividualBeer',
  props: ['id', 'name', 'image', 'tagline']
}
</script>
<style scoped>
  .rounded-shaped {
    border-width: 2px;
  }

  .btn:hover {
    background-color: #fff !important;
    color: #e65100 !important;
  }

  @media screen and (min-width: 600px) {
    .name-height {
      height: 5rem;
    }

    .tagline-height {
      height: 6rem;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 750px) {
    .name-height {
      height: 8rem;
    }
  }
</style>
