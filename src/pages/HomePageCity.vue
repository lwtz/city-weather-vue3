<template>
  <div>
    <searchCityVue />

    <p>Cidade: {{ city }}</p>
  </div>
</template>

<script>
import searchCityVue from '@/components/searchCity.vue'

export default {
  name: 'HomePageCity',
  data() {
    return {
      city: this.$store.state.cidade.name,
    }
  },
  components: {
    searchCityVue,
  },
}
</script>
