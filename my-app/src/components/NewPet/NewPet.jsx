import { useDispatch } from 'react-redux';
import { addPet, setLayer } from '../../actions/actions.js';

import NewPetView from './NewPetView.jsx';

const NewPet = ({ pet, setPet }) => {
  const dispatch = useDispatch();

  // Añade la mascota obtenida al inventario
  const add = () => {
    dispatch(addPet(pet));
    dispatch(setLayer(0, ''));
  };

  // Renderiza el form Rename
  const rename = () => {
    dispatch(setLayer(1, 'Rename'));
  };

  return (
  
  <NewPetView pet={pet} setPet={setPet} add={add} rename={rename} />
)
};

export default NewPet;


