import Navbar from "../Navbar/Navbar"
import bannerBg from "../../assets/banner-bg.png"

const HomeBanner = () => {
  return (
    <div className="h-[95vh]"  style={{
        backgroundImage: `url('${bannerBg}')`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className=" max-w-[1240px] mx-auto px-[20px] py-5"> 
        <Navbar></Navbar>
        </div>
      
    </div>
  )
}

export default HomeBanner
