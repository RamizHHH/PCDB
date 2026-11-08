import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/Home");
  };

  return (
    <>
      <nav className="Nav_Div">
        <ul id="nav_list">
          <li onClick={handleClick}>PCDB</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
