import { Link, Outlet } from "react-router-dom";
import TopDashNav from "../Components/Navbar/DashboardNav/TopDashNav";
import { Logo } from "../Components/Shared/Logo";
import { UserDashNav } from "../Components/Navbar/DashboardNav/UserDashNav";
import { AdminNav } from "../Components/Navbar/DashboardNav/AdminNav";
import { RepresentativeNav } from "../Components/Navbar/DashboardNav/RepresentativeNav";

const DashboardLayout = () => {
  return (
    <div className="max-w-[1240px] px-[20px] mx-auto">
      <div className="grid min-h-screen grid-cols-12 py-5">
        <div className="col-span-3 px-5 border-2 border-red-300 h-full">
          <div className="Logo flex justify-center items-center">
            <Link to="/dashboard">
            
            <Logo></Logo>
            </Link>
          </div>
          <hr className="mt-3" />
          <div className="h-auto">
            {/* <UserDashNav></UserDashNav> */}
            {/* <AdminNav></AdminNav> */}
            <RepresentativeNav></RepresentativeNav>
          </div>
        </div>
        <div className="col-span-9 ">
          <div>
            <nav className="border-2 border-red-400 ">
              <TopDashNav></TopDashNav>
            </nav>
          </div>
          <div className="border-2 border-red-400 h-[calc(100%-52px)] p-3">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
