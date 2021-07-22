import { useSelector, useDispatch } from 'react-redux'
import { setLayer } from '../../actions/actions.js'
import styles from './EggInfoView.module.css'

const bucks = './img/icons/bucks.png'

const EggInfo = () => {
  const layer1 = useSelector((state) => state.layer1)
  const egg = useSelector((state) => state.egg)
  const dispatch = useDispatch()

  if (layer1 === 'EggInfo') {
    return (

      <div className={styles.box}>
        <div id={styles.closeDiv}>
          <button
            className='btn btn-danger' onClick={() => dispatch(setLayer(1, ''))}
          >
            X
          </button>
        </div>

        <div className={styles.body}>
          <h3>{egg.name}</h3>

          <img className={styles.img} alt='' src={egg.img} />

          <div className={styles.description}>
            <p>{egg.description}</p>
          </div>

          <div className={styles.keys}>

            <div>
              <h4>Costo</h4>
              <span>  {egg.cost}</span>
              <span> <img src={bucks} alt='' /></span>
            </div>

            <div>
              <h4>Rareza</h4>
              <span className={egg.rarity === 'Raro' ? styles.rarityBlue : null}>⧫</span>
              <span>  {egg.rarity}</span>
            </div>

          </div>

          <br />
          <h4>Posibilidad de incubar:</h4>
          <ul>
            {egg.content.map((pet, index) => (
              <li key={index}> {pet}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  return null
}

export default EggInfo
