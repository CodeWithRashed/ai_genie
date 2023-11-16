import { Outlet } from "react-router-dom";
import HomeBanner from "../Components/HomeBanner/HomeBanner";

const MainLayout = () => {
  return (
    <div className="font-Inter">
      <div> 
        
      <HomeBanner></HomeBanner>
      </div>
      <div className=" max-w-[1240px] mx-auto px-[20px]">

      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
