import GroupTrainings from "../Components/GroupTrainings/GroupTrainings";
import Hero from "../Components/Hero/Hero";
import Subscription from "../Components/Subscription/Subscription";
import WhyUs from "../Components/WhyUs/WhyUs";

function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Subscription />
      <GroupTrainings />
    </>
  );
}
export default HomePage;
