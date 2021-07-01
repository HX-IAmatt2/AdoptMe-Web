import React from 'react';
import { Link } from 'react-router-dom';

import title from '../img/title.png';
import styles from './Nav.module.css';

function Nav({typeOfEgg}) {
  return (
    <nav id={styles.Nav}>
      <Link to="/">
        <img src={title} alt=""></img>
      </Link>

      <Link to="/NuevoHuevo">
        <button
          className="btn btn-primary"
          onClick={() => typeOfEgg()}>
          Adoptar
        </button>
      </Link>

      <Link to="/Inventario">
        <button
          className="btn btn-info"
        >
          Inventario
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
