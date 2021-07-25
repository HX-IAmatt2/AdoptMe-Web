import React, { useState } from 'react'
import { badWordsSpa } from '../../data/badWords.js'
import { setLayer } from '../../actions/actions.js'
import { useDispatch, useSelector } from 'react-redux'
// import RegisterView from './RegisterView.jsx'

import styles from './RegisterView.module.css'

const Login = () => {
  const layer1 = useSelector((state) => state.layer1)

  const dispatch = useDispatch()
  const [mail, setMail] = useState()
  const [name, setName] = useState()
  const [pass, setPass] = useState()

  const [error, setError] = useState(false)

  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


  const handleChange = (input, value) => {
    setError(false)
    if (input === 'name') {
      if (badWordsSpa.includes(value.toLowerCase())) { setError('Insultos no permitidos!') }
      if (value.length < 3) setError('Debe tener al menos 3 caracteres')
      if (value === '') setError('Ingresa un nuevo nombre')
      setName(value)
    }

    if (input === 'mail') {
      if (badWordsSpa.includes(value.toLowerCase())) { setError('Insultos no permitidos!') }
      if (value.length < 3) setError('Debe tener al menos 3 caracteres')
      if (value === '') setError('Ingresa un nuevo nombre')
      setMail(value)
    }

    // setMail(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!error) {
      dispatch(setLayer(1, ''))
    }
  }

  if (layer1 === 'Register') {
    return (

      <div id={styles.box}>
        <div>
          <h4>Completa los campos para registrarte</h4>
        </div>

        <form
          id={styles.formBox}
          className='form-inline'
          onSubmit={handleSubmit}
        >
          <div className={styles.input}>
            <label>Nombre o Apodo:</label><br />
            <input
              className='form-control mr-sm-2'
              type='text'
              name='name'
              key='name'
              value={name}
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
          </div>

          <div className={styles.input}>
            <label>Dirección de email:</label><br />
            <input
              className='form-control mr-sm-2'
              type='text'
              name='mail'
              key='mail'
              value={mail}
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
          </div>

          <div className={styles.input}>
            <label>Genero:</label><br />
            <select
              className='form-select form-select-sm'
              aria-label='.form-select-sm example'
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            >
              <option value='F'>Femenino</option>
              <option value='M'>Masculino</option>
              <option value='X'>X</option>
            </select>
          </div>

          <div className={styles.input}>
            <label>Contraseña:</label><br />
            <input
              className='form-control mr-sm-2'
              type='password'
              name='pass'
              key='pass'
              value={pass}
              onChange={(event) => handleChange(event.target.name, event.target.value)}
            />
          </div>

          <div className={styles.buttons}>
            <button
              className={
                error
                  ? 'disabled btn btn-success my-2 my-sm-0'
                  : 'btn btn-success my-2 my-sm-0'
              }
              type='submit'
            >
              Registrarme
            </button>
            <button
              className={
                error
                  ? 'disabled btn btn-success my-2 my-sm-0'
                  : 'btn btn-danger my-2 my-sm-0'
              }
              type='submit'
            >
              Cancelar
            </button>
          </div>

          {error ? <h5>{error}</h5> : null}
        </form>
      </div>
    )
  } else return null
}

export default Login
