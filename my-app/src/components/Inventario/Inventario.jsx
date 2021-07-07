import React from 'react';
import { Link } from 'react-router-dom';

import {useSelector,  useDispatch} from 'react-redux'
import {removePet} from '../../actions/actions.js'

import styles from './Inventario.module.css';

export default function Inventario() {

  const inventarioStore = useSelector( state => state.inventario)
  const dispatch = useDispatch()
 
  function remove(id) {
    //setInventario(inventario.filter((pet) => pet.id !== id));
    dispatch(removePet(id));
  }

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
        {inventarioStore.length > 0 ? (
          <ul id={styles.pets}>
            {inventarioStore.map((pet, i) => (
              <li key={i}>
                <img src={pet.img} alt=""></img>
                <h4>{pet.name}</h4>
                <button
                  id={styles.removeBtn}
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
