import { NavLink, Outlet } from "react-router-dom";
import TopDashNav from "../Components/Navbar/TopDashNav";
import { Logo } from "../Components/Shared/Logo";

const DashboardLayout = () => {

const sideDashNavItems = (
  <ul>
    <li>
      <NavLink to="/dashboard" >Dashboard</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/profile" >Profile</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/subscription" >Subscription</NavLink>
    </li>
  </ul>
)



  return (
    <div className="max-w-[1240px] px-[20px] mx-auto">
      
    <div className="grid h-screen grid-cols-12 py-5">
      <div className="col-span-3 px-5 border-2 border-red-300 h-full">
      <div className="Logo">
        <Logo></Logo>
      </div>
      <hr className="my-3" />
      <div>
        {sideDashNavItems}
      </div>
      </div>
      <div className="col-span-9">
        <div>
          <nav className="border-2 border-red-400">
            <TopDashNav></TopDashNav>
          </nav>
        </div>
        <div className="border-2 border-red-400 h-full">

      <Outlet></Outlet>
        </div>
      </div>
    </div>
    </div>

  );
};

export default DashboardLayout;
