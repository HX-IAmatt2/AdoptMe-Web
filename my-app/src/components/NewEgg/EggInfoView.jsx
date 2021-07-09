import { useSelector } from 'react-redux';
import styles from './EggInfoView.module.css';


const EggInfo = ({ egg, closeEggInfo}) => {
  const layer1 = useSelector((state) => state.layer1);

  if (layer1 === 'EggInfo') {
    return (
      <div className={styles.box}>
        <div id={styles.closeDiv}>
          <button className="btn btn-danger" onClick={closeEggInfo}>
            X
          </button>
        </div>
        <div className={styles.body}>
          <h3>{egg.name}</h3>
          <p>{egg.description}</p>
          <br></br>
          <h4>Posibilidad de incubar:</h4>
          <ul>
            {egg.content.map((pet, index) => (
              <li key={index}> {pet}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return null;
};

export default EggInfo;
