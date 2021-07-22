import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { setLayer } from '../../actions/actions.js'

import EggInfo from '../NewEgg/EggInfoView'

import styles from './Wiki.module.css'

const Wiki = () => {
  const dispatch = useDispatch()
  const [list, setList] = useState({})
  const [category, setCategory] = useState('eggs')
  const [rarity, setRarity] = useState('Todos')
  const [egg, setEgg] = useState({}) /// PASAR AL STORE DE REDUX

  useEffect(() => {
    makeList()
  }, [category, rarity])

  // Renderiza EggInfo en Layer1
  const eggInfo = (value) => {
    setEgg(value)
    dispatch(setLayer(1, 'EggInfo'))
  }

  // Cierra EggInfo
  const closeEggInfo = () => {
    dispatch(setLayer(1, ''))
  }

  const makeList = async () => {
    let response = ''
    try {
      if (rarity.toLowerCase() === 'todos') {
        response = await fetch(`http://localhost:3001/${category}/all`)
      } else {
        response = await fetch(
          `http://localhost:3001/${category}/all?rarity=${rarity}`
        )
      }
      setList(await response.json())
    } catch (error) {
      console.log('Error en Fetch:', error)
    }
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
      </div>

      <div className={styles.options}>

        <div>
          {list.length > 0 ? <h4>Categoría:</h4> : null}

          <select
            class='form-select form-select-sm'
            aria-label='.form-select-sm example'
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value='eggs'>Huevos</option>
            <option value='pets'>Mascotas</option>
          </select>
        </div>

        <div>
          {list.length > 0 ? <h4>Rareza:</h4> : null}

          {category === 'eggs'
            ? (
              <select
                class='form-select form-select-sm'
                aria-label='.form-select-sm example'
                onChange={(event) => setRarity(event.target.value)}
              >
                <option value='Todos'>Todos</option>
                <option value='Común'>Comunes</option>
                <option value='Raro'>Raros</option>
                <option value='Legendario'>Legendarios</option>
              </select>
              )
            : (
              <select
                class='form-select form-select-sm'
                aria-label='.form-select-sm example'
                onChange={(event) => setRarity(event.target.value)}
              >
                <option value='Todos'>Todos</option>
                <option value='Común'>Comunes</option>
                <option value='Poco Común'>Poco comunes</option>
                <option value='Raro'>Raros</option>
                <option value='Ultra raro'>Ultra raros</option>
                <option value='Legendario'>Legendarios</option>
              </select>
              )}
        </div>
      </div>

      <div className={styles.list}>
        <ul>
          {list.length > 0
            ? list.map((item, index) => (
              <li className={styles.list} key={index}>
                {item.name} ({item.rarity})
                <input
                  type='image'
                  src={item.img}
                  onClick={() => eggInfo(item)}
                />
              </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  )
}

export default Wiki
