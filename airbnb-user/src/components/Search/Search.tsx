import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Search() {
  return (
    <div className="search">
      <div>
        <p>AnyWhere</p>
      </div>
      <div>
        <p>Any Week</p>
      </div>
      <div className="lastOption">
        <p>Any Guests</p>
      </div>
      <div className="faSearch">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}

export default Search;
