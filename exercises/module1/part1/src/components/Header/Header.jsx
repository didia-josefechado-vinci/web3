import Logo from './LOGO HE VINCI.png'

const Header = (props) => {
  return (
    <div>
    <h1>{props.course}</h1>
    <img src={Logo} alt="Logo HE VINCI" />
    </div>
  )
}

export default Header