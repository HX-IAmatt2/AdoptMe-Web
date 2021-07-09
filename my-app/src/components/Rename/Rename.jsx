import React, { useState } from 'react';
import { badWordsSpa } from '../../data/badWords.js';
import { setLayer } from '../../actions/actions.js';
import { useDispatch } from 'react-redux';
import RenameView from './RenameView.jsx';

const Rename = ({ pet, setPet }) => {
  const dispatch = useDispatch();
  const [newName, setnewName] = useState(pet.name);
  const [error, setError] = useState(false);

  const handleChange = (value) => {
    setError(false);
    if (badWordsSpa.includes(value.toLowerCase()))
      setError(`Insultos no permitidos!`);
    if (value.length < 3) setError('Debe tener al menos 3 caracteres');
    if (value === '') setError('Ingresa un nuevo nombre');
    setnewName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!error) {
      setPet((prev) => ({ ...prev, name: newName })); // cambia la prop name de pet
      dispatch(setLayer(1, ''));
    }
  };

  return (
    <RenameView
      pet={pet}
      newName={newName}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Rename;
