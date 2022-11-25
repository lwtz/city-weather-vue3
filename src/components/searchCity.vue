<template>
  <div>
    <label for="search"></label>
    <input
      class="border-solid bg-gray-200 border-2 border-gray-200 rounded w-64 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      type="text"
      id="search"
      name="search"
      v-model="cityDefault"
      placeholder="Digite o nome da cidade"
    />
    <br />
    <button @click="getCity" class="mt-2 bg-indigo-500 rounded-md w-24 h-8">
      Buscar
    </button>
    <br />
    <br />
    <!-- <div>
      <span>Cidade: {{ dados.name }}</span>
      <br />
      <br />
      <span>Temperatura: {{ dados.temp }}</span>
      <br />
      <span>temp_max: {{ dados.temp_max }}</span>
      <br />
      <span>temp_min: {{ dados.temp_min }}</span>
      <br />
      <span>sky: {{ dados.sky }}</span>
    </div> -->

    <hr />
    <p v-for="(item, index) in dados" :key="index">{{ index }}: {{ item }}</p>
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
      dados: {
        Cidade: '',
        Temperatura: 0,
        Temperatura_Maxima: 0,
        Temperatura_Minima: 0,
        Ceu: '',
      },
      cityDefault: 'ijui',
    }
  },
  methods: {
    async getCity() {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.cityDefault}&units=metric&appid=${api_key}&lang=pt_br`,
        )
        .then((response) => {
          console.log(response.data)
          this.dados.Cidade = response.data.name
          this.dados.Temperatura = response.data.main.temp
          this.dados.Temperatura_Maxima = response.data.main.temp_max
          this.dados.Temperatura_Minima = response.data.main.temp_min
          this.dados.Ceu = response.data.weather[0].description
          // this.getFlag(response.data.sys.country)
        })
    },

    // async getFlag(flag) {
    //   await axios.get(`https://countryflagsapi.com/png/${flag}`).then((response) => {
    //     console.log(response.data)
    //   })
    // },
  },
}
</script>
