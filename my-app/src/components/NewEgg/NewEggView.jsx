import { useSelector, useDispatch } from 'react-redux';
import { setLayer } from '../../actions/actions.js';
import EggInfo from './EggInfoView';
import styles from './NewEggView.module.css';

const NewEggView = ({ egg, newPet, getEgg }) => {
  const layer0 = useSelector((state) => state.layer0);
  const dispatch = useDispatch();

  // Renderiza EggInfo en Layer1
  const eggInfo = () => {
    dispatch(setLayer(1, 'EggInfo'));
  };

  // Cierra EggInfo
  const closeEggInfo = () => {
    dispatch(setLayer(1, ''));
  };

  return layer0 === 'New Egg' ? (
    <div className={styles.box}>
      {egg.type === 'initial' ? (
        <div id={styles.titulo}>Bienvenido!</div>
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
        <EggInfo egg={egg} closeEggInfo={closeEggInfo} />
      </div>
      <div className={styles.bottom}>
        <input
          id={styles.infoBtn}
          type="image"
          src="./img/icons/info.png"
          alt=""
          onClick={eggInfo}
        />
      </div>

      {egg.type === 'initial' ? <div></div> : null}
    </div>
  ) : null;
};

export default NewEggView;
