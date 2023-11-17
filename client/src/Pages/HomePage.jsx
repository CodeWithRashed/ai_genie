import { Footer } from "../Components/Footer/Footer";
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import FeatureSection from "../Components/Sections/FeatureSection/FeatureSection";
import PricingSection from "../Components/Sections/PricingSection/PricingSection";
import ReviewSection from "../Components/Sections/ReviewSection/ReviewSection";
import Subscribe from "../Components/Sections/Subscribe/Subscribe";
import WhyChooseUs from "../Components/Sections/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      <header>
        <section className="lg:h-[100vh] h-[80vh]">
          <HomeBanner></HomeBanner>
        </section>
      </header>

      <section className="my-16">
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section className="my-16">
        <FeatureSection></FeatureSection>
      </section>
      <section className="my-16">
        <PricingSection></PricingSection>
      </section>
      <section className="my-16">
        <ReviewSection></ReviewSection>
      </section>
      <section className="my-16">
        <Subscribe></Subscribe>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomePage;
