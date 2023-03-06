import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

function AccountSetting() {
  return (
    <div className="accountSetting">
      <div className="menu">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
      <div className="user">
        <FontAwesomeIcon icon={faUser} size="lg" />
      </div>
    </div>
  );
}

export default AccountSetting;
