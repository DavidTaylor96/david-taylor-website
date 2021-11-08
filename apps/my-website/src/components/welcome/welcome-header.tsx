import './welcome-header.scss'
import NameLogo from '../../assets/name-logo.svg'

export const WelcomeHeader = () => {
  return (
    <header className='welcome-header' >
      <h1 id="h1">Hello, my name is</h1>
      <img id="name-logo" src={NameLogo} alt="image of david taylor" />
      <h3 id="h3"><i>creative developer</i></h3>
    </header>
  )
}