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
        <Navbar></Navbar>
      
    </div>
  )
}

export default HomeBanner
