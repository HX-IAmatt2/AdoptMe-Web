import React, { useState } from 'react';
import {badWordsSpa} from '../badWords.js'
import styles from './Rename.module.css';

export default function Rename({ pet, setPet, window, setWindow }) {
  
  const [newName, setnewName] = useState(pet.name);
  const [error, setError] = useState(false);

  // Monitorea el state del input
  function handleChange(value) {
    setError(false);

    if (badWordsSpa.includes(value.toLowerCase())) setError(`Insultos no permitidos!`);
    if (value.length < 3) setError('Debe tener al menos 3 caracteres');
    if (value === '') setError('Ingresa un nuevo nombre');
    setnewName(value);
  }

  // Maneja el submit
  function handleSubmit(e) {
    e.preventDefault();
    setPet((prev) => ({ ...prev, name: newName }));  // cambia la prop name de pet
    setWindow({...window, popup:''})
  }

  if (window.popup === 'Rename') {

  return (
    <div id={styles.box}>
      <div>
        <h3>Como quieres que se llame tu {pet.raza}?</h3>
      </div>

      <form
        id={styles.inputDiv}
        className="form-inline"
        onSubmit={handleSubmit}
      >
        <input
          id={styles.input}
          className="form-control mr-sm-2"
          type="text"
          name="name"
          key="name"
          value={newName}
          onChange={(event) => handleChange(event.target.value)}
        />

        <button
          id={styles.btn}
          className={
            error ? 'disabled btn btn-success my-2 my-sm-0' : 'btn btn-success my-2 my-sm-0'
          }
          type="submit"
        >
          OK
        </button>

        {error ? <h5>{error}</h5> : null}

      </form>
    </div>
  );

  }

  else return null;
}
