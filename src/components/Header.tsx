import styled from "styled-components";
import { colors, mediaQueries } from "../assets/styles/theme";
import logo from "../assets/images/logo/main_logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div className="header-inner">
        <img
          className="main-logo"
          src={logo}
          alt="상단 포켓몬 메인 로고"
          onClick={() => navigate("/")}
        />
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

  ${mediaQueries.tablet} {
    .header-inner {
      text-align: center;
    }
  }

  ${mediaQueries.mobile} {
    .header-inner {
      text-align: center;
    }
  }
`;
