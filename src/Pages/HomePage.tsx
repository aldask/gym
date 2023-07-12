import GroupTrainings from "../Components/GroupTrainings/GroupTrainings";
import Hero from "../Components/Hero/Hero";
import Locations from "../Components/Locations/Locations";
import Subscription from "../Components/Subscription/Subscription";
import WhyUs from "../Components/WhyUs/WhyUs";
import Footer from "../Components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Subscription />
      <GroupTrainings />
      <Locations />
      <Footer />
    </>
  );
}
export default HomePage;
