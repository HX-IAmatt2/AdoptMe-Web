import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Rename from '../Rename/Rename.jsx'
import styles from './NewPetView.module.css'

const NewPetView = ({ pet, setPet, add, showRename }) => {
  const layer0 = useSelector((state) => state.layer0)

  if (layer0 === 'New Pet') {
    return (
      <div className={styles.box}>
        <div id={styles.header}>
          <h2>Obtuviste {pet.description}!</h2>
        </div>
        <div id={styles.img}>
          <img src={pet.img} alt='' />
        </div>

        <Rename pet={pet} setPet={setPet} />

        <div id={styles.info}>
          <ul>
            <li key='name'>Nombre: {pet.name}</li>
            <li key='type'>Rareza: {pet.rarity}</li>
            <li key='age'>Edad: {pet.age}</li>
            <li key='tricks'>
              Trucos:
              <ul id={styles.trickList}>
                {pet.trucos.map((truco, i) => (
                  <li key={i}> {truco} </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <div id={styles.btnsDiv}>
          <button className='btn btn-primary' onClick={showRename}>
            Cambiar nombre
          </button>
          <Link to='/Inventario'>
            <button className='btn btn-success' onClick={add}>
              Guardar en inventario
            </button>
          </Link>
        </div>
      </div>
    )
  } else return null
}

export default NewPetView
