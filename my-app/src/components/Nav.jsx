import React from 'react';
import { Link } from 'react-router-dom';

import {setLayer} from '../actions/actions.js'
import {useDispatch} from 'react-redux'

import styles from './Nav.module.css';

function Nav({typeOfEgg}) {

  const toHome = event => {
    event.preventDefault();
    dispatch(setLayer(0,''))
    dispatch(setLayer(1,''))
  }

  const dispatch = useDispatch()

  return (
    <nav id={styles.Nav}>
      
      <Link to="/">
      <a><img src='./img/title.png' alt='' onClick={toHome}/></a>
      </Link>

      <div id={styles.buttons}>

      <Link to="/">
        <button
          className="btn btn-primary"
          onClick={() => typeOfEgg()}>
          Adoptar
        </button>
      </Link>

        <Link to="/Inventario">
          <button
            className="btn btn-info"
            onClick={() => dispatch(setLayer(0,''))}
            >
            Inventario
          </button>
        </Link>
      
      </div>
    </nav>
  );
}

export default Nav;
