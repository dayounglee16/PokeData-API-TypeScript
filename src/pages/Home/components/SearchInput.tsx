import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { flexStyles } from "../../../assets/styles/theme";

const SearchInput = () => {
  return (
    <Form>
      <input
        className="search-input"
        type="text"
        placeholder="포켓몬 아이디를 입력해주세요"
      />
      <button className="search-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </Form>
  );
};

export default SearchInput;

const Form = styled.form`
  ${flexStyles("row", "center", "center", 0)}
  position: relative;

  .search-input {
    width: 60%;
    padding: 17px 20px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    border: 2px solid #eee;
    outline: none;
  }

  .search-input::placeholder {
    color: #999;
  }

  .search-button {
    position: absolute;
    top: 13%;
    right: 19%;
    font-size: 16px;
    padding: 10px;
    border: none;
    background-color: #fff;
  }
`;
