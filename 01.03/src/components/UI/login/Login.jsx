import { Link } from 'react-router-dom'
import cat from './assets/simons_cat.gif'
import './login.scss'
import { MyInput } from '../input/MyInput'
import { ButtonForm } from '../buttonForm/ButtonForm'
import { useInput } from '../../../hooks/useInput'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const email = useInput('', { isEmpty: true, emailError: true })
  const password = useInput('', { isEmpty: true, minLength: 6, maxLength: 12 })
  const isFormValid =
    typeof email.validity === 'boolean' &&
    typeof password.validity === 'boolean'

  return (
    <div className="wrapper">
      <h1>Only registered users can contact breeders</h1>
      <h2>Log in to your profile or register</h2>
      <div className="login">
        <div className="login-img">
          <img src={cat} alt="cat" />
        </div>
        <form
          className="login-form form"
          onSubmit={() => {
            localStorage.setItem('auth', email.value)
            navigate('/')
          }}
        >
          <MyInput label="e-mail" type="text" placeholder="e-mail" {...email} />
          <MyInput
            label="password"
            type="password"
            placeholder="password"
            {...password}
          />
          <ButtonForm disabled={!isFormValid} type="submit">
            Confirm
          </ButtonForm>
        </form>
      </div>
      <Link className="link" to="/">
        Go to main page
      </Link>
    </div>
  )
}
