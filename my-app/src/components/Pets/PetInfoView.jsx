import { useSelector, useDispatch } from 'react-redux'
import { setLayer } from '../../actions/actions.js'
import styles from './PetInfoView.module.css'

const PetInfo = ({ pet }) => {
  const layer1 = useSelector((state) => state.layer1)
  const dispatch = useDispatch()

  if (layer1 === 'Pet Info') {
    return (

      <div className={styles.box}>
        <div id={styles.closeDiv}>
          <button className='btn btn-danger' onClick={() => dispatch(setLayer(1, ''))}>
            X
          </button>
        </div>

        <div className={styles.body}>
          <h3>{pet.name}</h3>

          <img className={styles.img} alt='' src={pet.img} />

          <div className={styles.description}>
            <p>{pet.txt}</p>
          </div>

          <div className={styles.keys}>

            <div>
              <h4>Proviene de:</h4>
              <span>{pet.source}</span>
            </div>

            <div>
              <h4>Rareza</h4>
              <span className={pet.rarity === 'Raro' ? styles.rarityBlue : null}>⧫</span>
              <span>  {pet.rarity}</span>
            </div>

          </div>

          <br />
          <h4>Trucos:</h4>
          <ul>
            {pet.trucos.map((truco, index) => (
              <li key={index}> {truco}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  return null
}

export default PetInfo
