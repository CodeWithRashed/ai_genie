import { NavLink, useLocation } from "react-router-dom";
import LogoDark from "../../assets/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  //Handle Active Route UnderLine
  const [active, setActive] = useState();
  const location = useLocation();
  useEffect(() => {
    let activeMenu =
      "/" + location.pathname.split("/").filter(Boolean).join("");
    setActive(activeMenu);
  }, [active, location]);
  return (
    <div className="flex justify-between items-center my-3 bg-transparent">
      {/* Nav Start */}
      <div className="h-12">
        <img className="h-full object-cover" src={LogoDark} alt="" />
      </div>

      {/* Nav Center */}
      <div>
        <ul className="flex justify-center items-center gap-4 text-color-subtitle  font-bold">
          <li className="flex flex-col">
            <NavLink
              onClick={() => setActive("/")}
              to="/"
              className={({ isActive }) =>
                isActive ? "text-color-primary" : ""
              }
            >
              Home
            </NavLink>
            <div
              className={`h-[2px] bg-gradient-to-r from-transparent via-${
                active == "/" ? "fuchsia-700" : "transparent"
              } to-transparent`}
            ></div>
          </li>

          <li className="flex flex-col">
            <NavLink
              onClick={() => setActive("/about")}
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-color-primary" : ""
              }
            >
              About
            </NavLink>
            <div
              className={`h-[2px] bg-gradient-to-r from-transparent via-${
                active == "/about" ? "fuchsia-700" : "transparent"
              } to-transparent`}
            ></div>
          </li>
          <li className="flex flex-col">
            <NavLink
              onClick={() => setActive("/contact")}
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-color-primary" : ""
              }
            >
              Contact
            </NavLink>
            <div
              className={`h-[2px] bg-gradient-to-r from-transparent via-${
                active == "/contact" ? "fuchsia-700" : "transparent"
              } to-transparent`}
            ></div>
          </li>
          <li className="flex flex-col">
            <NavLink
              onClick={() => setActive("/contact")}
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-color-primary" : ""
              }
            >
              Login
            </NavLink>
            <div
              className={`h-[2px] bg-gradient-to-r from-transparent via-${
                active == "/login" ? "fuchsia-700" : "transparent"
              } to-transparent`}
            ></div>
          </li>
        </ul>
      </div>

      {/* Nav End */}
      <div className="">
        <button className="bg-color-primary px-3 py-2 rounded-main text-white">
          Free Trial
        </button>
        <div className="hidden h-10 w-10 rounded-full bg-color-secondary"></div>
      </div>
    </div>
  );
};

export default Navbar;
