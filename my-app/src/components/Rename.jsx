import React from 'react';
import styles from './Rename.module.css';

export default function Rename({ pet }) {
  return (

    <div id={styles.box}>
      
      <div>  
        <h3>{pet.name}</h3>
      </div>

      <form id={styles.inputDiv} class="form-inline">
    <input id={styles.input} class="form-control mr-sm-2" type="search" placeholder="Nuevo nombre..." aria-label="Search"/>
    <button id={styles.btn} class="btn btn-success my-2 my-sm-0" type="submit">OK</button>
      </form>

    
    </div>
  );
}
