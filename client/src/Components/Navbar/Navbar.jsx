import { Link } from "react-router-dom";
import LogoDark from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      {/* Nav Start */}
      <div className="h-12">
        <img className="h-full object-cover" src={LogoDark} alt="" />
      </div>

      {/* Nav Center */}
      <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </ul>
      </div>

      {/* Nav End */}
      <div>
        <div className="h-10 w-10 rounded-full bg-color-secondary"></div>
      </div>
    </div>
  );
};

export default Navbar;
