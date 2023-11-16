import HomeBanner from "../Components/HomeBanner/HomeBanner";
import WhyChooseUs from "../Components/Sections/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <section className="h-[95vh]">
        <HomeBanner></HomeBanner>
      </section>
      <section className="my-16">
        <WhyChooseUs></WhyChooseUs>
      </section>
    </div>
  );
};

export default HomePage;
