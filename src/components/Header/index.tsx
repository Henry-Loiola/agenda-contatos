import Logo from '../../assets/logo.svg';
import './styles';
import { StyledHeader } from './styles';

function Header() {
  
  return (
    <StyledHeader>
      <img src={Logo} alt="Logo" />
    </StyledHeader>
  );
}

export default Header;