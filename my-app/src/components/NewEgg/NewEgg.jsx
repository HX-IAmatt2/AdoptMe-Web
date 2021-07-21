import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import NewEggView from './NewEggView.jsx'
import { setLayer } from '../../actions/actions.js'

import NewPet from '../NewPet/NewPet.jsx'

const NewEgg = ({ egg, getEgg }) => {
  const dispatch = useDispatch()
  const [pet, setPet] = useState({})

  // Devuelve un nro random entre 0 y 100 inclusive
  const getRandom = () => Math.floor(Math.random() * 100) + 1

  // Obtiene una nueva mascota segun el huevo
  // Falta completar. Farm esta listo, ya tiene todos sus pets.
  const newPet = async () => {
    let fetchPet = ''
    const random = Math.floor(getRandom())
    // const random =  // << Ingresar numero para probar una moscota

    switch (egg.type) {
      case 'initial':
        if (random > 0 && random <= 50) fetchPet = 'Gato'
        if (random > 50 && random <= 101) fetchPet = 'Perro'
        break
      case 'common':
        fetchPet = 'Gato'
        break
      case 'broken':
        fetchPet = 'Perro'
        break
      case 'farm':
        if (random > 0 && random <= 20) fetchPet = 'Pollo' // Comunes 20%
        if (random > 20 && random <= 37.5) fetchPet = 'PatoTonto'
        if (random > 37.5 && random <= 55) fetchPet = 'Pato' // Poco comunes 35 %
        if (random > 55 && random <= 68.5) fetchPet = 'Cerdo'
        if (random > 68.5 && random <= 82) fetchPet = 'Vaca' // Raros 27%
        if (random > 82 && random <= 89.5) fetchPet = 'Pavo'
        if (random > 89.5 && random <= 97) fetchPet = 'Llama' // Ultra Raros 15%
        if (random > 97 && random <= 98.5) fetchPet = 'Buho'
        if (random > 98.5 && random <= 100) fetchPet = 'Cuervo' // Legendarios 3 %
        break
      case 'blue':
        fetchPet = 'PerroAzul'
        break
      case 'pink':
        fetchPet = 'GatoRosa'
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
        fetchPet = 'Carpincho'
        break

      default:
        break
    }
    console.log(`Random obtenido: ${random} (Mascota: ${fetchPet})`)

    try {
      const response = await fetch('http://localhost:3001/pets/' + fetchPet)
      setPet(await response.json())
    } catch (error) {
      console.log('Error en Fetch:', error)
    }

    dispatch(setLayer(0, 'New Pet'))
  }

  return (
    <>
      <NewEggView egg={egg} newPet={newPet} getEgg={getEgg} />
      <NewPet pet={pet} setPet={setPet} />
    </>
  )
}

export default NewEgg
