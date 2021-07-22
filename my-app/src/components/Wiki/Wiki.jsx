import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { setLayer, setEgg } from '../../actions/actions.js'

import WikiView from './WikiView'

const Wiki = () => {
  const dispatch = useDispatch()
  const egg = useSelector((state) => state.egg)
  const [list, setList] = useState({})
  const [category, setCategory] = useState('eggs')
  const [rarity, setRarity] = useState('Todos')
  const [pet, setPet] = useState({})

  useEffect(() => {
    const makeList = async () => {
      let response = ''
      try {
        if (rarity.toLowerCase() === 'todos') {
          response = await window.fetch(
            `http://localhost:3001/${category}/all`
          )
        } else {
          response = await window.fetch(
            `http://localhost:3001/${category}/all?rarity=${rarity}`
          )
        }
        setList(await response.json())
      } catch (error) {
        console.log('Error en Fetch:', error)
      }
    }
    makeList()
  }, [category, rarity])

  // Renderiza EggInfo en Layer1
  const eggInfo = (egg) => {
    dispatch(setEgg(egg))
    dispatch(setLayer(1, 'EggInfo'))
  }

  // Cierra EggInfo
  const closeEggInfo = () => {
    dispatch(setLayer(1, ''))
  }

  // Renderiza PetInfo en Layer1
  const petInfo = (item) => {
    setPet(item)
    dispatch(setLayer(1, 'Pet Info'))
  }

  return (
    <WikiView
      closeEggInfo={closeEggInfo}
      eggInfo={eggInfo}
      list={list}
      category={category}
      setCategory={setCategory}
      egg={egg}
      rarity={rarity}
      setRarity={setRarity}
      pet={pet}
      petInfo={petInfo}
    />
  )
}

export default Wiki
