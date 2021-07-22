import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { setLayer } from '../../actions/actions.js'

import EggInfo from '../NewEgg/EggInfoView'

import styles from './Wiki.module.css'

const Wiki = () => {
  const dispatch = useDispatch()
  const [list, setList] = useState({})
  const [filter, setFilter] = useState('Todos')
  const [egg, setEgg] = useState({}) /// PASAR AL STORE DE REDUX

  useEffect(() => {
    listEggs()
  }, [filter])

  // Renderiza EggInfo en Layer1
  const eggInfo = (value) => {
    setEgg(value)
    dispatch(setLayer(1, 'EggInfo'))
  }

  // Cierra EggInfo
  const closeEggInfo = () => {
    dispatch(setLayer(1, ''))
  }

  const listEggs = async () => {
    let response = ''
    try {
      if (filter.toLocaleLowerCase() === 'todos') { response = await fetch('http://localhost:3001/eggs/all') } else {
        response = await fetch(
          'http://localhost:3001/eggs/all?rarity=' + filter
        )
      }
      setList(await response.json())
    } catch (error) {
      console.log('Error en Fetch:', error)
    }
  }

  const handleChange = (value) => {
    setFilter(value)
  }

  return (
    <div className={styles.box}>

      <div id={styles.closeDiv}>

        <Link to='/'>
          <button className='btn btn-danger'>X</button>
        </Link>
      </div>

      <div id={styles.header}>
        <h2>Wiki</h2>

      </div>

      <div className={styles.body}>
        <EggInfo egg={egg} closeEggInfo={closeEggInfo} />

        <br /> <br />
        <h3>Huevos</h3>

      </div>

      <div>
        {list.length > 0 ? <h4>Filtrar por rareza:</h4> : null}

        <select
          class='form-select form-select-sm'
          aria-label='.form-select-sm example'
          onChange={(event) => handleChange(event.target.value)}
        >
          <option value='Todos'>Todos</option>
          <option value='Común'>Comúm</option>
          <option value='Raro'>Raro</option>
          <option value='Legendario'>Legendario</option>
        </select>

      </div>

      <div className={styles.list}>

        <ul>
          {list.length > 0
            ? list.map((item, index) => (
              <li key={index}>
                {item.name} ({item.rarity})
                <button onClick={() => eggInfo(item)}>
                  <img src={item.img} />
                </button>
              </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  )
}

export default Wiki
