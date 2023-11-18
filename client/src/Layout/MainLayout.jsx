import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="font-Inter max-w-[1240px] mx-auto px-[20px]">
        <div className="fixed z-50 backdrop-blur-2xl w-full left-0 top-0">
          <div className="max-w-[1240px] mx-auto px-[20px]">
            <Navbar></Navbar>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
