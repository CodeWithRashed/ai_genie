import HomeBanner from "../Components/HomeBanner/HomeBanner";
import FeatureSection from "../Components/Sections/FeatureSection/FeatureSection";
import PricingSection from "../Components/Sections/PricingSection/PricingSection";
import WhyChooseUs from "../Components/Sections/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <section className="h-[100vh]">
        <HomeBanner></HomeBanner>
      </section>
      <section className="my-16">
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section className="my-16">
        <FeatureSection></FeatureSection>
      </section>
      <section className="my-16">
        <PricingSection></PricingSection>
      </section>
    </div>
  );
};

export default HomePage;
