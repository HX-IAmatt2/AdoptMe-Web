import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLayer } from '../../actions/actions.js'

import axios from 'axios'
import { port, host } from '../../config.js'

import { badWordsSpa } from '../../data/badWords.js'
// import RegisterView from './RegisterView.jsx'

import styles from './RegisterView.module.css'

const Login = () => {
  const layer1 = useSelector((state) => state.layer1)

  const dispatch = useDispatch()
  const [name, setName] = useState()
  const [nameError, setNameError] = useState(false)

  const [gender, setGender] = useState()
  const [mail, setMail] = useState()
  const [mailError, setMailError] = useState()

  const [pass, setPass] = useState()
  const [passError, setPassError] = useState()

  const [registerError, setRegisterError] = useState()

  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const passformat = /^[A-Za-z]\w/

  const handleChange = (input, value) => {
    if (input === 'name') {
      setNameError(false)
      if (value.length < 3) setNameError('El nombre debe tener al menos 3 caracteres')
      else if (badWordsSpa.includes(value.toLowerCase())) setNameError('Insultos como nombre no son permitidos!')
      // if (value === '') setNameError('Ingresa tu nombre o apodo!')
      setName(value)
    }

    if (input === 'mail') {
      setMailError(false)
      if (!value.match(mailformat)) setMailError('Debes ingresar un email valido')
      setMail(value)
    }

    if (input === 'pass') {
      setPassError(false)
      if (value.length < 6 || value.length > 8) setPassError('El password debe tener de 6 a 8 caracteres')
      else if (!value.match(passformat)) setPassError('El password debe contener letras')
      setPass(value)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!nameError && !mailError && !passError) {
      try {
        await axios.post(`http://${host}:${port}/auth/register`, { name, gender, mail, pass })
        dispatch(setLayer(1, ''))
      } catch (error) {
        setRegisterError(error.response.data)
      }
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
            <label>Genero:</label><br />
            <select
              className='form-select form-select-sm'
              aria-label='.form-select-sm example'
              onChange={(event) => setGender(event.target.value)}
            >

              <option value='-'>---</option>
              <option value='F'>Femenino</option>
              <option value='M'>Masculino</option>
            </select>
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
                nameError || mailError || passError
                  ? 'disabled btn btn-success my-2 my-sm-0'
                  : 'btn btn-success my-2 my-sm-0'
              }
              type='submit'
            >
              Registrarme
            </button>
            <button
              className='btn btn-danger my-2 my-sm-0'
              onClick={() => dispatch(setLayer(1, ''))}
            >
              Cancelar
            </button>
          </div>

          <div className={styles.error}>
            {nameError ? <h5>{nameError}</h5> : null}
            {mailError ? <h5>{mailError}</h5> : null}
            {passError ? <h5>{passError}</h5> : null}
            {registerError ? <h5>{registerError}</h5> : null}

          </div>

        </form>
      </div>
    )
  } else return null
}

export default Login
