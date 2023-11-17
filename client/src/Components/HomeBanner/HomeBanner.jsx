import bannerBg from "../../assets/banner-bg.png"
import bannerImage from '../../assets/banner.png'

const HomeBanner = () => {
  return (
    <div
        className="absolute -z-10 top-0 left-0 w-full h-full !overflow-hidden"
        style={{
          backgroundImage: `url('${bannerBg}')`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >

        {/* Banner Content */}
        <div className="grid grid-cols-2 gap-3 banner-content max-w-[1240px] mx-auto px-[20px] h-full justify-between items-center">
         {/* Banner Text Content */}
         <div className="space-y-3"> 
            <h1 className="text-6xl">
              AI Genie 
              <br />
              One of the Best 
              <br />
              <span className="text-color-primary">Generative</span> AI
            </h1>
            <p className="text-color-subtitle">No Credit Card Required</p>
            <button className="bg-color-primary text-white px-4 py-2 rounded-main">Try Demo</button>
         </div>

         {/* Banner Image  */}
         <div> 
          <img className="w-full h-full object-cover" src={bannerImage} alt="" />
          </div>
        </div>

      </div>
  )
}

export default HomeBanner
