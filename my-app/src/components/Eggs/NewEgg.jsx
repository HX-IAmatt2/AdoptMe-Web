import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { setLayer } from '../../actions/actions.js'

import NewEggView from './NewEggView.jsx'
import NewPet from '../Pets/NewPet.jsx'

const NewEgg = () => {
  const dispatch = useDispatch()
  const [pet, setPet] = useState({})

  // Renderiza EggInfo en Layer1
  const eggInfo = () => {
    dispatch(setLayer(1, 'EggInfo'))
  }

  return (
    <>
      <NewEggView eggInfo={eggInfo} setPet={setPet} />
      <NewPet pet={pet} setPet={setPet} />
    </>
  )
}

export default NewEgg
