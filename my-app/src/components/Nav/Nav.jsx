import { Link } from 'react-router-dom'
import { setLayer } from '../../actions/actions.js'
import { useDispatch } from 'react-redux'

import adoptMe from '../../functions/functions'

import styles from './Nav.module.css'

const Nav = () => {
  const toHome = () => {
    dispatch(setLayer(0, ''))
    dispatch(setLayer(1, ''))
  }

  const dispatch = useDispatch()

  return (
    <nav id={styles.Nav}>
      <Link to='/'>
        <img src='./img/title.png' alt='' onClick={toHome} />
      </Link>

      <div id={styles.buttons}>
        <Link to='/'>
          <button
            className='btn btn-primary'
            onClick={() => adoptMe.getEgg('', dispatch)}
          >
            Adoptar
          </button>
        </Link>

        <Link to='/Inventario'>
          <button
            className='btn btn-info'
            onClick={() => dispatch(setLayer(0, ''))}
          >
            Inventario
          </button>
        </Link>

        <Link to='/Wiki'>
          <button
            className='btn btn-info'
            onClick={() => dispatch(setLayer(0, ''))}
          >
            Wiki
          </button>
        </Link>

      </div>
    </nav>
  )
}

export default Nav
