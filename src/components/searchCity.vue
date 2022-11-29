<template>
  <div class="grid justify-center justify-items-center">
    <label for="search" class="mb-3">Digite o nome da cidade para saber o clima</label>
    <input
      class="border-solid bg-gray-200 border-2 border-gray-200 rounded w-64 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      type="text"
      id="search"
      name="search"
      v-model="cityDefault"
      placeholder="Digite o nome da cidade"
    />
    <button
      @click="searchAndSetCityData"
      class="text-white mt-2 mb-5 bg-indigo-500 rounded-md w-24 h-8"
    >
      Pesquisar
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchCity',
  data() {
    return {
      icon: '',
      img: '',
      country: '',
      countrybg: '',
      cityDefault: 'Tokyo',
    }
  },
  methods: {
    searchAndSetCityData() {
      this.$store.commit('setCityData', this.cityDefault)
    },
  },
  // watch: {
  //   dados: {
  //     handler() {
  //       this.img = `https://openweathermap.org/img/wn/${this.icon}.png`
  //       this.countrybg = `https://countryflagsapi.com/png/${this.country}`
  //     },
  //     deep: true,
  //   },
  // },
}
</script>
