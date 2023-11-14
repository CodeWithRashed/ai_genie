import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </ul>
    </div>
  );
};

export default Navbar;
