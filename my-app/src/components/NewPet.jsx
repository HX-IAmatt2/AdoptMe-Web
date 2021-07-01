import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Rename from './Rename.jsx'

import styles from './NewPet.module.css';

export default function NewPet({pet, add}) {

  return (
    <div className={styles.box}>
      <div id={styles.header}>
        <h2>Obtuviste {pet.description}!</h2>
      </div>
      <div id={styles.img}>
        <img src={pet.img} alt=""></img>
      </div>

      <Route path="/NuevaMascota/Renombrar" render={() => <Rename pet={pet} />} />


      <div id={styles.info}>
        <ul>
          <li>Nombre: {pet.name}</li>
          <li>Rareza: {pet.rareza}</li>
          <li>Edad: {pet.age}</li>
          <li>
            Trucos:
            <ul id={styles.trickList}>
              {pet.trucos.map((truco) => (
                <li> {truco} </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <div id={styles.btnsDiv}>
        <Link to="/NuevaMascota/Renombrar">
          <button 
          className="btn btn-primary" 
          onClick={() => add()}>
            Cambiar nombre
          </button>
        </Link>
        <Link to="/Inventario">
          <button className="btn btn-success" onClick={() => add()}>
            Guardar en inventario
          </button>
        </Link>
      </div>
    </div>
  );
}
