import { useSelector, useDispatch } from 'react-redux';
import { setLayer } from '../../actions/actions.js';
import styles from './NewEggView.module.css';

const NewEggView = ({ egg, newPet }) => {
  const layer0 = useSelector((state) => state.layer0);
  const dispatch = useDispatch();


  return layer0 === 'New Egg' ? (
    <div className={styles.box}>
      {egg.type === 'initial' ? (
        <div id={styles.titulo}>Regalo de bienvenida!</div>
      ) : (
        <div id={styles.titulo}>Abre tu huevo!</div>
      )}

      <div id={styles.body}>
        <input
          className="shake-slow shake-constant shake-constant--hover"
          type="image"
          alt=""
          src={egg.img}
          onClick={newPet}
        />
      </div>
    </div>
  ) : null;
};

export default NewEggView;
