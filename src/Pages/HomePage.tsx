import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import GroupTrainings from "../Components/GroupTrainings/GroupTrainings";
import Locations from "../Components/Locations/Locations";
import Subscription from "../Components/Subscription/Subscription";
import WhyUs from "../Components/WhyUs/WhyUs";
import Maps from "../Components/Maps/Maps";
import Footer from "../Components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Subscription />
      <GroupTrainings />
      <Locations />
      <Maps />
      <Footer />
    </>
  );
}
export default HomePage;
