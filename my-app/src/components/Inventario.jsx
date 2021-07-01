import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Inventario.module.css';

export default function Inventario({ inventario}) {
  console.log('Contenido del Inventario:', inventario);
  return (
    <div className={styles.box}>
      <div id={styles.closeDiv}>
        <Link to="/">
          <button
            id={styles.btnClose}
            className="btn btn-danger"
          >
            X
          </button>
        </Link>
      </div>

      <div id={styles.header}>
        <h2>Inventario</h2>
      </div>

      <div id={styles.pets}>
        {inventario.map((pet,i) => (
          <img key={i} src={pet.img} alt=""></img>
        ))}
      </div>
    </div>
  );
}
