import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


import styles from './Inventario.module.css';

export default function Inventario({ inventario, setInventario }) {
 
  function remove(id) {
    setInventario(inventario.filter((pet) => pet.id !== id));
  }

  console.log('Contenido del Inventario:', inventario);
  return (
    <div className={styles.box}>
      <div id={styles.closeDiv}>
        <Link to="/">
          <button id={styles.btnClose} className="btn btn-danger">
            X
          </button>
        </Link>
      </div>

      <div id={styles.header}>
        <h2>Inventario</h2>
      </div>

      <div>
        {inventario.length > 0 ? (
          <ul id={styles.pets}>
            {inventario.map((pet, i) => (
              <li key={i}>
                <img src={pet.img} alt=""></img>
                <h4>{pet.name}</h4>
                <button
                  id={styles.removeBtn}
                  //className="btn btn-danger"
                  onClick={() => remove(pet.id)}
                >
                  <img
                    id={styles.removeImg}
                    src="./img/delete-signv2.png"
                    alt=""
                  ></img>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <br></br> <br></br>
            <h4> Aún no tienes mascotas </h4>
          </div>
        )}
      </div>
    </div>
  );
}
