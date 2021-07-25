import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

import { setLayer, setEgg } from '../../actions/actions.js'

import { Link } from 'react-router-dom'

import EggInfo from '../Eggs/EggInfoView'
import PetInfo from '../Pets/PetInfoView'

import { port, host } from '../../config.js'

import styles from './WikiView.module.css'

const Wiki = ({ data, setData }) => {
  const dispatch = useDispatch()
  const [category, setCategory] = useState('eggs')
  const [rarity, setRarity] = useState('all')
  const [pet, setPet] = useState({})

  const [position, setPosition] = useState(0)

  const [list, setList] = useState([])
  // const [data, setData] = useState([])

  useEffect(() => {
    setList(data.slice(position, position + 5))
  }, [position, data])

  // Renderiza EggInfo en Layer1
  const eggInfo = (egg) => {
    dispatch(setEgg(egg))
    dispatch(setLayer(1, 'EggInfo'))
  }

  // Renderiza PetInfo en Layer1
  const petInfo = (item) => {
    setPet(item)
    dispatch(setLayer(1, 'Pet Info'))
  }

  const getData = async () => {
    setPosition(0)
    let response = ''

    try {
      if (rarity === 'all') {
        response = await window.fetch(`http://${host}:${port}/${category}/all`)
      } else {
        response = await window.fetch(
          `http://${host}:${port}/${category}/all?rarity=${rarity}`
        )
      }
    } catch (err) {
      console.log(err)
    }
    setData(await response.json())
    // await setList(data.slice(position, position + 5))
  }

  const next = () => {
    if (position + 5 < data.length) setPosition(position + 1)
  }

  const prev = () => {
    if (position > 0) setPosition(position - 1)
  }

  return (
    <>
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
          <EggInfo />
        </div>

        <div className={styles.body}>
          <PetInfo pet={pet} />
        </div>

        <div className={styles.options}>
          <div className={styles.arrow}>
            <h4>Categoría:</h4>

            <select
              className='form-select form-select-sm'
              aria-label='.form-select-sm example'
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value='eggs'>Huevos</option>
              <option value='pets'>Mascotas</option>
            </select>
          </div>

          <div className={styles.arrow}>
            <h4>Rareza:</h4>

            {category === 'eggs'
              ? (
                <select
                  className='form-select form-select-sm'
                  aria-label='.form-select-sm example'
                  onChange={(event) => setRarity(event.target.value)}
                >
                  <option value='all'>Todos</option>
                  <option value='Común'>Comunes</option>
                  <option value='Raro'>Raros</option>
                  <option value='Legendario'>Legendarios</option>
                </select>
                )
              : (
                <select
                  className='form-select form-select-sm'
                  aria-label='.form-select-sm example'
                  onChange={(event) => setRarity(event.target.value)}
                >
                  <option value='all'>Todas</option>
                  <option value='Común'>Comunes</option>
                  <option value='Poco Común'>Poco comunes</option>
                  <option value='Raro'>Raras</option>
                  <option value='Ultra raro'>Ultra raras</option>
                  <option value='Legendario'>Legendarias</option>
                </select>
                )}
          </div>

          <div className={styles.arrow}>
            <button className='btn btn-success' onClick={() => getData()}>BUSCAR</button>
          </div>

        </div>

        <div className={styles.body}>
          <ul className={styles.ul}>
            {list.map((item, index) =>
              <li className={styles.list} key={index}>
                <div>({item.rarity})</div>
                <div>{item.name}</div>
                <input
                  type='image'
                  alt=''
                  src={item.img}
                  onClick={() => category === 'eggs' ? eggInfo(item) : petInfo(item)}
                />
              </li>
            )}
          </ul>
        </div>

        <div className={styles.bottom}>

          <div className={styles.arrow}>
            {data.length > 5 ? <img src='./img/icons/arrowL.png' width='40px' alt='' onClick={() => prev()} /> : null}
          </div>
          <div className={styles.arrow}>
            {data.length > 5 ? <img src='./img/icons/arrowR.png' width='40px' alt='' onClick={() => next()} /> : null}
          </div>
        </div>

      </div>
    </>

  )
}

export default Wiki
