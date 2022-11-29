<template>
  <div v-if="dados.Cidade !== ''" class="flex justify-center z-10 sticky">
    <div class="block p-6 rounded-lg shadow-2xl shadow-indigo-500/40 bg-white max-w-sm">
      <div>
        <span> {{ dados.Cidade }} - {{ dados.country }}</span>
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
        <img :src="dados.iconSky" alt="" />
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
    <img :src="dados.countryBackground" alt="Bandeira do País" />
  </div>
</template>

<script>
export default {
  name: 'CardInfo',
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
        iconSky: '',
        country: '',
        countryBackground: '',
      },
      icon: '',
    }
  },
  watch: {
    $store: {
      handler() {
        this.dados.Cidade = this.$store.state.cityData.Cidade
        this.dados.Temperatura = this.$store.state.cityData.Temperatura
        this.dados.Temperatura_Maxima = this.$store.state.cityData.Temperatura_Maxima
        this.dados.Temperatura_Minima = this.$store.state.cityData.Temperatura_Minima
        this.dados.Ceu = this.$store.state.cityData.Ceu
        this.dados.humidity = this.$store.state.cityData.humidity
        this.dados.speed = this.$store.state.cityData.speed
        this.dados.country = this.$store.state.cityData.country
        this.dados.iconSky = `https://openweathermap.org/img/wn/${this.$store.state.cityData.iconSky}.png`
        this.dados.countryBackground = `https://countryflagsapi.com/png/${this.$store.state.cityData.country}`
      },
      deep: true,
    },
  },
}
</script>
