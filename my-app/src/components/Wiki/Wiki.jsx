import { Link } from 'react-router-dom'
import React, { useState } from 'react'

// import { useSelector, useDispatch } from 'react-redux'
// import { removePet } from '../../actions/actions.js'

import styles from './Wiki.module.css'

const Wiki = () => {
  const [list, setList] = useState({})

  const listEggs = async () => {
    try {
      const response = await fetch('http://localhost:3001/eggs/all?rarity=raro')
      setList(await response.json())
    } catch (error) {
      console.log('Error en Fetch:', error)
    }
    console.log(list)
  }

  return (
    <div className={styles.box}>
      <div id={styles.closeDiv}>
        <Link to='/'>
          <button className='btn btn-danger'>
            X
          </button>
        </Link>
      </div>

      <div id={styles.header}>
        <h2>Wiki</h2>
      </div>

      <div>
        <br /> <br />
        <button id={styles.removeBtn} onClick={() => listEggs()}>
          <h4>Huevos</h4>
        </button>

      </div>

      <div>
        <ul>
          {list.length > 0 ? list.map((item, index) => (<li key={index}>{item.name}</li>)) : null}
        </ul>
      </div>
    </div>
  )
}

export default Wiki
