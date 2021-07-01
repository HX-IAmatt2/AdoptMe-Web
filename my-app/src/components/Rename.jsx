import React, {useState} from 'react';
import { Link, Redirect} from 'react-router-dom';

import styles from './Rename.module.css';

export default function Rename({ pet, setPet}) {
  
  const [newName, setnewName] = useState('');
  const [error, setError] = useState(false);

  // Monitorea el state del input
  function handleChange(value) {
    setError(false)
    if ( value.toLowerCase() ==='puto' || value.toLowerCase() ==='puta') {setError (`Insultos no permitidos!`)}
    setnewName(value)
  }

  // Maneja el submit
  function handleSubmit(e) {
    e.preventDefault();
    setPet( prev => ({...prev, name: newName }) )
    
  }

  return (
    <div id={styles.box}>
      <div>
        <h3>{pet.name}</h3>
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
          placeholder="Nuevo nombre..."
          onChange={ (event) => handleChange(event.target.value)}
        />
          <button
            id={styles.btn}
            className={error? "disabled btn btn-success my-2 my-sm-0" :  "btn btn-success my-2 my-sm-0"}
            type="submit"
            //onClick={() => }
          >
            OK
          </button>
     
        {error? <h5>{error}!</h5> : null}
      </form>
    </div>
  );
}
