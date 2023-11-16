import { Outlet } from "react-router-dom";
import HomeBanner from "../Components/HomeBanner/HomeBanner";

const MainLayout = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
