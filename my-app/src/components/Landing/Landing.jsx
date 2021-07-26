import React, { useState } from 'react'

import axios from 'axios'
import { port, host } from '../../config.js'

import { useSelector, useDispatch } from 'react-redux'
import { setLogged, setLayer } from '../../actions/actions.js'

import styles from './Landing.module.css'

const Landing = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')

  const [mailError, setMailError] = useState(false)
  const [passError, setPassError] = useState(false)
  const [loginError, setloginError] = useState(false)

  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const handleChange = (input, value) => {
    setloginError(false)
    if (input === 'mail') {
      setMailError(false)
      if (!value.match(mailformat)) setMailError('Debes ingresar un email valido')
      setMail(value)
    }
    if (input === 'pass') {
      setPassError(false)
      if (value === '') setPassError('Debes ingresar tu contraseña')
      setPass(value)
    }
  }

  const handleSubmit = async () => {
    if (mail && pass) {
      setloginError(false)
      try {
        const res = await axios.post(`http://${host}:${port}/auth/login`, { mail, pass })
        dispatch(setLogged(res.data.name, res.data.gender, res.data.new))
        console.log('Bienvenido', res.data.name)
      } catch (error) {
        setloginError(error.response.data)
      }
    }
  }

  if (!user.logged) {
    return (

      <div className={styles.main}>

        <div className={styles.box}>

          <div id={styles.header}>
            <h3>Bienvenido a</h3>
            <img src='./img/title.png' alt='' width='300' />
            <h4>Ingresa a tu cuenta para poder jugar</h4>
            <form
              id={styles.formLogin}
              className='form-inline'
            >
              <div className={styles.input}>
                <label>Dirección de e-mail:</label><br />
                <input
                  className='form-control mr-sm-2'
                  type='text'
                  name='mail'
                  key='mail'
                  value={mail}
                  onChange={(event) => handleChange('mail', event.target.value)}
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
                  onChange={(event) => handleChange('pass', event.target.value)}
                />
              </div>

              {mailError ? <h5 className={styles.error}>{mailError}</h5> : null}
              {passError ? <h5 className={styles.error}>{passError}</h5> : null}
              {loginError ? <h5 className={styles.error}>{loginError}</h5> : null}

            </form>
            <div className={styles.controls}>
              <button
                className={
                    !mail || !pass
                      ? 'disabled btn btn-success my-2 my-sm-0'
                      : 'btn btn-success my-2 my-sm-0'
            }
                onClick={() => handleSubmit()}
              >
                Ingresar
              </button>

              <button
                className='btn btn-info'
                onClick={() => dispatch(setLayer(1, 'Register'))}
              >
                Crear una cuenta
              </button>
            </div>
          </div>

          <div />

        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Landing
