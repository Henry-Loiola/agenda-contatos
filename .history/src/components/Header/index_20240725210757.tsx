import Logo from '../../assets/logo.svg';
import SignOutIcon from '../../assets/sign-out.svg';


import './styles.css';

function Header() {

  

  function handleLogout() {
    toast.messageSuccess('Até logo!');
  }

  return (
    <header>
      <img src={Logo} alt="Logo" />
      <img
        className="sign-out-button"
        src={SignOutIcon}
        alt="Sign Out"
        onClick={() => handleLogout()}
      />
    </header>
  );
}

export default Header;