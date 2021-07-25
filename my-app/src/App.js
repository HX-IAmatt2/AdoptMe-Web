import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Nav from './components/Nav/Nav.jsx'
import NewEgg from './components/Eggs/NewEgg'
import Inventario from './components/Inventario/Inventario'
import Wiki from './components/Wiki/Wiki'

import adoptMe from './functions/functions'

import axios from 'axios'
import { port, host } from './config.js'

const App = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [data, setData] = useState([])

  useEffect(() => {
    adoptMe.getEgg('initial', dispatch) // Da un huevo de bienvenida de regalo por única vez.

    const fetchData = async () => {
      const response = await axios.get(`http://${host}:${port}/eggs/all`)
      setData(response.data)
    }
    fetchData()
  }, [dispatch])

  if (user.logged) {
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
  } else {
    return (null)
  }
}

export default App
