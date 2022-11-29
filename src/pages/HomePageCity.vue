<template>
  <div>
    <searchCityVue />
    <CardInfo />
  </div>
</template>

<script>
import searchCityVue from '@/components/searchCity.vue'
import CardInfo from '@/components/CardInfo.vue'

export default {
  name: 'HomePageCity',
  data() {
    return {
      cidade: '',
      temperatura: '',
    }
  },
  components: {
    searchCityVue,
    CardInfo,
  },

  methods: {
    getData() {
      // console.log(this.$store.getters.getSpeed)
      return `aaaa`
    },
  },
}
</script>
