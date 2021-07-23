import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Nav from './components/Nav/Nav.jsx'
import NewEgg from './components/Eggs/NewEgg'
import Inventario from './components/Inventario/Inventario'
import Wiki from './components/Wiki/Wiki'

import adoptMe from './functions/functions'

const App = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])

  useEffect(() => {
    adoptMe.getEgg('initial', dispatch) // Da un huevo de bienvenida de regalo por única vez.

    const fetchData = async () => {
      const response = await window.fetch('http://localhost:3001/eggs/all')
      setData(await response.json())
    }
    fetchData()
  }, [dispatch])

  return (
    <div className='App'>
      <Route path='/'>
        <Nav />
      </Route>

      <NewEgg />

      <Route path='/Wiki'>
        <Wiki data={data} setData={setData} />
      </Route>

      <Route path='/Inventario'>
        <Inventario />
      </Route>
    </div>
  )
}

export default App
