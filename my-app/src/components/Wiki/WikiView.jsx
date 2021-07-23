import { Link } from 'react-router-dom'

import EggInfo from '../Eggs/EggInfoView'
import PetInfo from '../Pets/PetInfoView'

import styles from './WikiView.module.css'

const WikiView = ({ pet, list, eggInfo, category, setCategory, setRarity, petInfo }) => {
  return (
    <div className={styles.box}>
      <div id={styles.closeDiv}>
        <Link to='/'>
          <button className='btn btn-danger'>X</button>
        </Link>
      </div>

      <div id={styles.header}>
        <h2>Wiki</h2>
      </div>

      <div className={styles.body}>
        <EggInfo />
      </div>

      <div className={styles.body}>
        <PetInfo pet={pet} />
      </div>

      <div className={styles.options}>
        <div>
          {list.length > 0 ? <h4>Categoría:</h4> : null}

          <select
            className='form-select form-select-sm'
            aria-label='.form-select-sm example'
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value='eggs'>Huevos</option>
            <option value='pets'>Mascotas</option>
          </select>
        </div>

        <div>
          {list.length > 0 ? <h4>Rareza:</h4> : null}

          {category === 'eggs'
            ? (
              <select
                className='form-select form-select-sm'
                aria-label='.form-select-sm example'
                onChange={(event) => setRarity(event.target.value)}
              >
                <option value='Todos'>Todos</option>
                <option value='Común'>Comunes</option>
                <option value='Raro'>Raros</option>
                <option value='Legendario'>Legendarios</option>
              </select>
              )
            : (
              <select
                className='form-select form-select-sm'
                aria-label='.form-select-sm example'
                onChange={(event) => setRarity(event.target.value)}
              >
                <option value='Todos'>Todos</option>
                <option value='Común'>Comunes</option>
                <option value='Poco Común'>Poco comunes</option>
                <option value='Raro'>Raros</option>
                <option value='Ultra raro'>Ultra raros</option>
                <option value='Legendario'>Legendarios</option>
              </select>
              )}
        </div>
      </div>

      <div className={styles.list}>
        <ul>
          {list.length > 0
            ? list.map((item, index) => (
              <li className={styles.list} key={index}>
                {item.name} ({item.rarity})
                <input
                  type='image'
                  alt=''
                  src={item.img}
                  onClick={() => category === 'eggs' ? eggInfo(item) : petInfo(item)}
                />
              </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  )
}

export default WikiView
