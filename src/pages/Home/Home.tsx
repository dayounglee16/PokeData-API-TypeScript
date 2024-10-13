import styled from "styled-components";
import SearchInput from "./components/SearchInput";
import CardList from "./components/CardList";

const Home = () => {
  return (
    <HomeContainer>
      <div className="home-inner">
        <SearchInput />
        <CardList />
      </div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  min-height: calc(100dvh - 68px);

  .home-inner {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 60px;
  }
`;
