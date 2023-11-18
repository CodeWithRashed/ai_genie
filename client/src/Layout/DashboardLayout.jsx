import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
  return (
    <div className="max-w-[1240px] px-[20px] mx-auto">
      <div className="my-10">Header Nav</div>
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <nav>
          dashboard Nav
        </nav>
      </div>
      <div className="col-span-8">

      <Outlet></Outlet>
      </div>
    </div>
    </div>

  );
};

export default DashboardLayout;
