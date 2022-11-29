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

    <div v-if="dados.Temperatura > 0" class="flex justify-center z-10 sticky">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <div>
          <span> {{ dados.Cidade }} - {{country}}</span>
        </div>

        <div>
          <span> {{ dados.Temperatura }}°C</span>
        </div>

        <div>
          <span>
            {{ dados.Temperatura_Maxima }} °C | {{ dados.Temperatura_Minima }} °C</span
          >
        </div>
        <div class="flex items-center">
          <img :src="img" alt="" />
          <span>
            {{
              dados.Ceu.replace(/^[a-z]/, function (m) {
                return m.toUpperCase()
              })
            }}</span
          >
        </div>
        <div>
          <div class="flex items-center justify-center mb-3">
            <svg class="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.2 24.2">
              <g data-name="Layer 2">
                <g data-name="droplet-outline">
                  <rect x=".1" y=".1" transform="rotate(.48 11.987 11.887)" opacity="0" />
                  <path
                    d="M12 21.1a7.4 7.4 0 0 1-5.28-2.28 7.73 7.73 0 0 1 .1-10.77l4.64-4.65a.94.94 0 0 1 .71-.3 1 1 0 0 1 .71.31l4.56 4.72a7.73 7.73 0 0 1-.09 10.77A7.33 7.33 0 0 1 12 21.1zm.13-15.57L8.24 9.45a5.74 5.74 0 0 0-.07 8A5.43 5.43 0 0 0 12 19.1a5.42 5.42 0 0 0 3.9-1.61 5.72 5.72 0 0 0 .06-8z"
                  />
                </g>
              </g>
            </svg>

            <span class="ml-3"> {{ dados.humidity }}% </span>
          </div>
          <div class="flex items-center justify-center">
            <svg class="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M14 18v-2h3.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-12 0v.007H1V10a8 8 0 0 1 15.458-2.901A5.5 5.5 0 1 1 17.5 18H14zm-8 2h10v2H6v-2zm0-8h8v2H6v-2zm-4 4h10v2H2v-2z"
              />
            </svg>
            <span class="ml-3"> {{ dados.speed }} m/s</span>
          </div>
        </div>
      </div>
    </div>
    <img :src="countrybg" alt="" class="-mt-60 opacity-25 object-cover w-full h-full" />
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
        humidity: 0,
        speed: 0,
      },
      icon: '',
      img: '',
      country: '',
      countrybg: '',
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
          // console.log(response.data)
          this.dados.Cidade = response.data.name
          this.dados.Temperatura = response.data.main.temp
          this.dados.Temperatura_Maxima = response.data.main.temp_max
          this.dados.Temperatura_Minima = response.data.main.temp_min
          this.dados.Ceu = response.data.weather[0].description
          this.icon = response.data.weather[0].icon
          this.dados.humidity = response.data.main.humidity
          this.dados.speed = response.data.wind.speed
          this.country = response.data.sys.country
          // this.getFlag(response.data.sys.country)
        })
    },

    // async getFlag(flag) {
    //   await axios.get(`openweathermap.org/img/wn/${flag}.png`).then((response) => {
    //     this.image = response.data
    //     console.log(response.data)
    //   })
    // },
  },
  watch: {
    dados: {
      handler() {
        this.img = `https://openweathermap.org/img/wn/${this.icon}.png`
        this.countrybg = `https://countryflagsapi.com/png/${this.country}`
      },
      deep: true,
    },
  },
}
</script>
