import { Link } from "react-router-dom";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

import Wrapper from "../assets/wrappers/Header";

type HeaderProps = {
  changeTheme: () => void;
  themeColor: string;
};

const Header = ({ changeTheme, themeColor }: HeaderProps) => {
  return (
    <Wrapper>
      <Link to="/" className="link">
        Where in the world?
      </Link>
      <button onClick={changeTheme} className="btn theme-btn">
        <span className="btn-icon">
          {themeColor === "light" ? (
            <IoMoonOutline />
          ) : (
            <IoMoon color="white" />
          )}
        </span>
        <span className="btn-text">Dark Mode</span>
      </button>
    </Wrapper>
  );
};

export default Header;
