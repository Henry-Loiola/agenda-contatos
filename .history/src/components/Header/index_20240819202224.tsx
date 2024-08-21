import Logo from '../../assets/logo.svg';



import './styles.css';

function Header() {
  
  return (
    <header>
      <img src={Logo} alt="Logo" />
    </header>
  );
}

export default Header;