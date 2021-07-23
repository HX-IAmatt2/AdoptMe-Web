import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Nav from './components/Nav/Nav.jsx'
import NewEgg from './components/Eggs/NewEgg'
import Inventario from './components/Inventario/Inventario'
import Wiki from './components/Wiki/Wiki'

import adoptMe from './functions/functions'

const App = () => {
  const dispatch = useDispatch()

  // Da un huevo de bienvenida de regalo por única vez.
  useEffect(() => {
    adoptMe.getEgg('initial', dispatch)
  }, [dispatch])

  return (
    <div className='App'>
      <Route path='/'>
        <Nav />
      </Route>

      <NewEgg />

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
