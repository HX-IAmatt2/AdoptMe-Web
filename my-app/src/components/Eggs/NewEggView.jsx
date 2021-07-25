import { useSelector, useDispatch } from 'react-redux'
import adoptMe from '../../functions/functions'
import EggInfoView from './EggInfoView'
import styles from './NewEggView.module.css'

const NewEggView = ({ setPet, eggInfo }) => {
  const layer0 = useSelector((state) => state.layer0)
  const egg = useSelector((state) => state.egg)
  const user = useSelector((state) => state.user)

  const dispatch = useDispatch()

  return layer0 === 'New Egg'
    ? (
      <div className={styles.box}>
        {egg.type === 'initial'
          ? (
            <div id={styles.titulo}> {user.gender === 'F' ? 'Bienvenida' : 'Bienvenido'} {user.name}!</div>
            )
          : (
            <div id={styles.titulo}>Abre tu huevo!</div>
            )}
        <div id={styles.body}>
          <input
            className='shake-slow shake-constant shake-constant--hover'
            type='image'
            alt=''
            src={egg.img}
            onClick={() => adoptMe.newPet(egg, dispatch, setPet)}
          />

          <EggInfoView />

        </div>
        <div className={styles.bottom}>
          <input
            id={styles.infoBtn}
            type='image'
            src='./img/icons/info.png'
            alt=''
            onClick={eggInfo}
          />
        </div>

        {egg.type === 'initial' ? <div /> : null}
      </div>
      )
    : null
}

export default NewEggView
