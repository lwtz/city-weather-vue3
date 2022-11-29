import { createStore } from 'vuex'
import axios from 'axios'

/*
https://www.youtube.com/watch?v=s1bWtzMKdO4&list=PLcoYAcR89n-qTYqfWTGxXMnAvCqY3JF8w&index=19


Introdução VUEX (state)
https://www.youtube.com/watch?v=s1bWtzMKdO4
*/

export default createStore({
  state: {
    cityData: {
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
    firstName: 'John',
    lastName: 'Doe',
  },
  mutations: {
    setCityData(state, payload) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=ba605efc18f1572f61892fe426f18a1a&lang=pt_br`,
        )
        .then((response) => {
          console.log(response.data)
          state.cityData.Cidade = response.data.name
          state.cityData.Temperatura = response.data.main.temp
          state.cityData.Temperatura_Maxima = response.data.main.temp_max
          state.cityData.Temperatura_Minima = response.data.main.temp_min
          state.cityData.Ceu = response.data.weather[0].description
          state.cityData.iconSky = response.data.weather[0].icon
          state.cityData.humidity = response.data.main.humidity
          state.cityData.speed = response.data.wind.speed
          state.cityData.country = response.data.sys.country
          console.log('store', state.cityData)
        })
    },
  },
  getters: {
    getCidade: function (state) {
      return state.cityData.Cidade
    },
    getTemperatura: function (state) {
      return state.cityData.Temperatura
    },
    getTemperaturaMaxima: function (state) {
      return state.cityData.Temperatura_Maxima
    },
    getTemperaturaMinima: function (state) {
      return state.cityData.Temperatura_Minima
    },
    getCeu: function (state) {
      return state.cityData.Ceu
    },
    getHumidity: function (state) {
      return state.cityData.humidity
    },
    getSpeed: function (state) {
      return state.cityData.speed
    },
  },
  actions: {},
  modules: {},
})
