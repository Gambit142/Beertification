<template>
  <div>{{ id }}</div>
  <p>{{name}}</p>
  <img :src="image" :alt="`${name} image`" />
  <p>{{description}}</p>
  <p>{{tagline}}</p>
</template>

<script>
export default {
  name: 'IndividualBeer',
  props: ['id', 'name', 'image', 'tagline', 'description']
}
</script>
