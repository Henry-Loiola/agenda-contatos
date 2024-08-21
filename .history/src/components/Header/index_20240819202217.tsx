import Logo from '../../assets/logo.svg';
import SignOutIcon from '../../assets/sign-out.svg';


import './styles.css';

function Header() {

    return (
    <header>
      <img src={Logo} alt="Logo" />
    </header>
  );
}

export default Header;