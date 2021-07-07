import React, { useState } from 'react';
import { badWordsSpa } from '../../badWords.js';

import { setLayer } from '../../actions/actions.js';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Rename.module.css';

const Rename = ({ pet, setPet }) => {
  const layer1 = useSelector((state) => state.layer1);
  const dispatch = useDispatch();

  const [newName, setnewName] = useState(pet.name);
  const [error, setError] = useState(false);

  // Monitorea el state del input
  const handleChange = (value) => {
    setError(false);
    if (badWordsSpa.includes(value.toLowerCase()))
      setError(`Insultos no permitidos!`);
    if (value.length < 3) setError('Debe tener al menos 3 caracteres');
    if (value === '') setError('Ingresa un nuevo nombre');
    setnewName(value);
  };

  // Maneja el submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setPet((prev) => ({ ...prev, name: newName })); // cambia la prop name de pet
    dispatch(setLayer(1, ''));
  };

  if (layer1 === 'Rename') {
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
              error
                ? 'disabled btn btn-success my-2 my-sm-0'
                : 'btn btn-success my-2 my-sm-0'
            }
            type="submit"
          >
            OK
          </button>

          {error ? <h5>{error}</h5> : null}
        </form>
      </div>
    );
  } else return null;
};

export default Rename;
