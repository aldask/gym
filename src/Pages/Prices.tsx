import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Comparison from "../Components/Comparison/Comparison";
import Subscription from "../Components/Subscription/Subscription";
import { FaqForPrice } from "../Components/Faq/Faq";

function Prices() {
  return (
    <>
      <Navbar />
      <Comparison />
      <Subscription />
      <FaqForPrice />
      <Footer />
    </>
  );
}
export default Prices;
