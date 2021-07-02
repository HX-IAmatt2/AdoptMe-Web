import React from 'react';
import { Link } from 'react-router-dom';

import title from '../img/title.png';
import styles from './Nav.module.css';

function Nav({ window, setWindow, typeOfEgg}) {
  return (
    <nav id={styles.Nav}>
      
      <Link to="/">
        <img src={title} alt=""></img>
      </Link>

        <button
          className="btn btn-primary"
          onClick={() => typeOfEgg()}>
          Adoptar
        </button>


      <Link to="/Inventario">
        <button
          className="btn btn-info"
          onClick={() => setWindow({...window, main:''})}
        >
          Inventario
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
