<template>
  <div>
    <label for="search"></label>
    <input
      class="border-solid 
      bg-gray-200 
      border-2 
      border-gray-200 
      rounded w-64 py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      type="text"
      id="search"
      name="search"
      v-model="city"
      placeholder="Digite o nome da cidade"
    />
    <br />
    <br />
    <button @click="getCity" class="bg-indigo-500 rounded-md w-24 h-8">Buscar</button>
  </div>
</template>

<script>
import axios from 'axios'

const api_key = 'ba605efc18f1572f61892fe426f18a1a'
// const apiCountry = `https://countryflagsapi.com/png/`
// const apiFLag = `http://openweathermap.org/img/wn/`

export default {
  name: 'SearchCity',
  data() {
    return {
      city: 'ijui',
    }
  },
  methods: {
    getCity() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${api_key}&lang=pt_br`,
        )
        .then((response) => {
          console.log(response.data)
          this.$store.state.cidade = response.data
        })
    },
  },
}
</script>
