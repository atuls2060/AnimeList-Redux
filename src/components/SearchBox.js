import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  let navigate = useNavigate();

  //when user starts typing
  function keywordChangeHandler(e) {
    const { value } = e.target;
    setKeyword(value);
  }

  function handleSearchClick() {
    const hasValue = keyword.trim().length;
    if (!hasValue) {
      navigate("/");
    } else {
      navigate(`search/${keyword}`);
    }
  }

  return (
    <div className="container">
      <div className="search-box-container">
        <input
          onChange={keywordChangeHandler}
          className="search-box"
          type="text"
          placeholder="This api only accepts exact searches..."
          value={keyword}
        />
        <i
          onClick={handleSearchClick}
          className="fa fa-search"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default SearchBox;
