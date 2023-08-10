import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import TrialContent from "../Components/TrialHero/TrialHero";
import WhyUs from "../Components/WhyUs/WhyUs";
import WhatCanDo from "../Components/WhatCanDo/WhatCanDo";
import Faq from "../Components/Faq/Faq";
import Subscription from "../Components/Subscription/Subscription";

function Trial() {
  return (
    <>
      <Navbar />
      <TrialContent />
      <WhyUs />
      <WhatCanDo />
      <Faq />
      <Subscription />
      <Footer />
    </>
  );
}
export default Trial;
