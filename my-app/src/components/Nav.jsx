import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Nav.module.css';

function Nav({ window, setWindow, typeOfEgg}) {
  return (
    <nav id={styles.Nav}>
      
      <Link to="/">
      <a><img src='./img/title.png' alt='' onClick={() => setWindow({})}/></a>
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
            onClick={() => setWindow({...window, main:''})}
            >
            Inventario
          </button>
        </Link>
      
      </div>
    </nav>
  );
}

export default Nav;
