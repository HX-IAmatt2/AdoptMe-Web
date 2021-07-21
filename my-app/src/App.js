import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import Nav from './components/Nav/Nav.jsx'
import NewEgg from './components/NewEgg/NewEgg'
import Inventario from './components/Inventario/Inventario'
import Wiki from './components/Wiki/Wiki'

import { setLayer } from './actions/actions.js'

const App = () => {
  const dispatch = useDispatch()
  const [egg, setEgg] = useState({})

  // Da un huevo de bienvenida de regalo por única vez.
  useEffect(() => {
    getEgg('initial')
  }, [])

  // Devuelve un nro random entre 0 y 100 inclusive
  const getRandom = () => Math.floor(Math.random() * 100) + 1

  // Establece el tipo de huevo
  const getEgg = async (egg) => {
    let fetchEgg = ''

    if (egg === 'initial') fetchEgg = egg
    else {
      const random = Math.floor(getRandom())
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
      const response = await fetch('http://localhost:3001/eggs/' + fetchEgg)
      setEgg(await response.json())
    } catch (error) {
      console.log('Error en Fetch:', error)
    }

    dispatch(setLayer(0, 'New Egg'))
  }

  return (
    <div className='App'>
      <Route path='/'>
        <Nav getEgg={getEgg} />
      </Route>

      <NewEgg egg={egg} />

      <Route path='/Wiki'>
        <Wiki />
      </Route>

      <Route path='/Inventario'>
        <Inventario />
      </Route>
    </div>
  )
}

export default App
