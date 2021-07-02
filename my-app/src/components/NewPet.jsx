import React from 'react';
import { Route, Link } from 'react-router-dom';
import Rename from './Rename.jsx';

import styles from './NewPet.module.css';

export default function NewPet({ pet, setPet, add, window, setWindow}) {
  return (
    <div className={styles.box}>
      <div id={styles.header}>
        <h2>Obtuviste {pet.description}!</h2>
      </div>
      <div id={styles.img}>
        <img src={pet.img} alt=""></img>
      </div>

    <Rename pet={pet} setPet={setPet} window={window} setWindow={setWindow} />
      

      <div id={styles.info}>
        <ul>
          <li key="name">Nombre: {pet.name}</li>
          <li key="type">Rareza: {pet.rareza}</li>
          <li key="age">Edad: {pet.age}</li>
          <li key="tricks">
            Trucos:
            <ul id={styles.trickList}>
              {pet.trucos.map((truco, i) => (
                <li key={i}> {truco} </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <div id={styles.btnsDiv}>
          <button
            className="btn btn-primary"
            onClick={() => setWindow('rename')}
          >
            Cambiar nombre
          </button>
        <Link to="/Inventario">
          <button className="btn btn-success" onClick={() => add()}>
            Guardar en inventario
          </button>
        </Link>
      </div>
    </div>
  );
}
