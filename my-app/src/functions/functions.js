import { setLayer, setEgg } from '../actions/actions.js'

import axios from 'axios'
import { port, host } from '../config.js'

const adoptMe = {

  getRandom: () => Math.floor(Math.random() * 100) + 1,

  // Obtiene un huevo segun nro random
  getEgg: async (egg, dispatch) => {
    let fetchEgg = ''

    if (egg === 'initial') fetchEgg = 'initial'
    else {
      const random = Math.floor(adoptMe.getRandom())
      // const random =  // << Ingresar numero para probar un huevo

      if (random > 0 && random <= 30) fetchEgg = 'broken'
      if (random > 20 && random <= 50) fetchEgg = 'common'
      if (random > 50 && random <= 60) fetchEgg = 'farm'
      if (random > 60 && random <= 70) fetchEgg = 'jungle'
      if (random > 70 && random <= 80) fetchEgg = 'blue'
      if (random > 80 && random <= 90) fetchEgg = 'pink'
      if (random > 90 && random <= 100) fetchEgg = 'safari'
      console.log(`numero obtenido: ${random} (huevo ${fetchEgg})`)
    }
    try {
      const response = await axios.get(`http://${host}:${port}/eggs/` + fetchEgg)
      dispatch(setEgg(await response.data))
    } catch (error) {
      console.log('Error en Fetch:', error)
    }
    dispatch(setLayer(0, 'New Egg'))
  },

  // Obtiene una nueva mascota segun el huevo
  newPet: async (egg, dispatch, setPet) => {
    let fetchPet = ''
    const random = adoptMe.getRandom()
    // const random =  // << Ingresar acá un numero y comentar la linea anterior para probar una moscota

    switch (egg.type) {
      case 'initial':
        if (random > 0 && random <= 50) fetchPet = 'gato'
        if (random > 50 && random <= 100) fetchPet = 'perro'
        break
      case 'common':
        fetchPet = 'gato'
        break
      case 'broken':
        fetchPet = 'perro'
        break
      case 'farm':
        if (random > 0 && random <= 20) fetchPet = 'pollo' // Comunes 20%
        if (random > 20 && random <= 37.5) fetchPet = 'patoTonto'
        if (random > 37.5 && random <= 55) fetchPet = 'pato' // Poco comunes 35 %
        if (random > 55 && random <= 68.5) fetchPet = 'cerdo'
        if (random > 68.5 && random <= 82) fetchPet = 'vaca' // Raros 27%
        if (random > 82 && random <= 89.5) fetchPet = 'pavo'
        if (random > 89.5 && random <= 97) fetchPet = 'llama' // Ultra Raros 15%
        if (random > 97 && random <= 98.5) fetchPet = 'buho'
        if (random > 98.5 && random <= 100) fetchPet = 'cuervo' // Legendarios 3 %
        break
      case 'blue':
        fetchPet = 'perroAzul'
        break
      case 'pink':
        fetchPet = 'gatoRosa'
        break
      case 'safari':
        if (random > 0 && random <= 22.5) fetchPet = 'jabali' // Poco comunes 45%
        if (random > 22.5 && random <= 45) fetchPet = 'suricata'
        if (random > 45 && random <= 63.5) fetchPet = 'hiena' // Raros 37%
        if (random > 63.5 && random <= 82) fetchPet = 'elefante'
        if (random > 82 && random <= 89.5) fetchPet = 'leon' // Ultra raros 15%
        if (random > 89.5 && random <= 97) fetchPet = 'flamenco'
        if (random > 97 && random <= 100) fetchPet = 'jirafa' // Legendario 3%

        break

      case 'jungle':
        fetchPet = 'carpincho'
        break

      default:
        break
    }
    console.log(`Random obtenido: ${random} (Mascota: ${fetchPet})`)

    try {
      const response = await axios.get(`http://${host}:${port}/pets/` + fetchPet)
      setPet(await response.data)
    } catch (error) {
      console.log('Error en Fetch:', error)
    }

    dispatch(setLayer(0, 'New Pet'))
  }
}

export default adoptMe
