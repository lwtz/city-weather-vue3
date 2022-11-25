<template>
  <div>
    <searchCityVue />

    <!-- <div v-if="getData">Cidade: {{ cidade }} temperatura: {{ temperatura }}</div> -->
  </div>
</template>

<script>
import searchCityVue from '@/components/searchCity.vue'

export default {
  //   name: 'HomePageCity',
  //   data() {
  //     return {
  //       cidade: '',
  //       temperatura: '',
  //     }
  //   },
  components: {
    searchCityVue,
  },
  //   computed: {
  //     getData() {
  //       this.cidade = this.$store.state.cidade.name),
  //         (this.temperatura = this.$store.state.cidade.main.temp)
  //       return true
  //     },
  //   },
}
</script>
