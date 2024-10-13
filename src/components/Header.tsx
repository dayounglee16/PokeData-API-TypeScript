import styled from "styled-components";
import { colors } from "../assets/styles/theme";
import logo from "../assets/images/logo/main_logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header-inner">
        <img className="main-logo" src={logo} alt="상단 포켓몬 메인 로고" />
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${colors.primary};
  border-bottom: 5px solid rgba(0, 0, 0, 0.09);

  .header-inner {
    max-width: 1440px;
    max-height: 70px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }

  .main-logo {
    cursor: pointer;
    width: 140px;
  }
`;
