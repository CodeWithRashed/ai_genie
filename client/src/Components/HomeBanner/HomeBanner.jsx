import bannerImage from "../../assets/banner.png";

const HomeBanner = () => {
  return (
    <div className="absolute -z-10 !w-full h-full top-0 left-0 !overflow-hidden bg-banner-bg bg-cover lg:bg-contain bg-no-repeat lg:bg-repeat-x">
      {/* Banner Content */}
      <div className=" banner-content max-w-[1240px] mx-auto px-[20px] h-full ">
        <div className="grid md:grid-cols-2 lg:gap-3 lg:mt-0 mt-24 md:mt-36 justify-center lg:h-full lg:justify-between lg:items-center">
          {/* Banner Text Content */}
          <div className="text-center md:text-left space-y-3 md:order-first order-last">
            <h1 className="text-3xl md:text-5xl  lg:text-6xl">
              AI Genie
              <br />
              One of the Best
              <br />
              <span className="text-color-primary">Generative</span> AI
            </h1>
            <p className="text-color-subtitle">No Credit Card Required</p>
            <button className="bg-color-primary text-white px-4 py-2 rounded-main">
              Try Demo
            </button>
          </div>

          {/* Banner Image  */}
          <div className="order-first lg:order-last h-[70%] w-[70%] md:w-full md-h-full mx-auto">
            <img
              className= "object-cover"
              src={bannerImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
