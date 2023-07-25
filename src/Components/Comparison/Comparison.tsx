import { slides, SlideContent } from "../../Data/locationsData";
import { useState } from "react";

function Comparison() {
  const [selectedGymAddress, setSelectedGymAddress] = useState<SlideContent>(
    slides[0]
  );

  const handleSelectedGym = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGymName = e.target.value;
    const selectedGym = slides.find((gym) => gym.gymName === selectedGymName);

    if (selectedGym) {
      setSelectedGymAddress(selectedGym);
    }
  };
  const planTitle = (index: number): string => {
    switch (index) {
      case 0:
        return "Min";
      case 1:
        return "Mid";
      case 2:
        return "Max";
      default:
        return "Min";
    }
  };

  return (
    <section className="comparison">
      <div className="container">
        <div className="comparison-box">
          <div className="comparison-box__top">
            <h2>Select your favourite gym</h2>
            <div className="comparison-box__top--selection">
              <label>Select your gym</label>
              <select name="gyms" onChange={handleSelectedGym}>
                {slides.map((gym) => (
                  <option key={gym.gymName} value={gym.gymName}>
                    {gym.gymName}
                  </option>
                ))}
              </select>
            </div>
            <div className="comparison-box__top--display">
              <div className="comparison-box__top--display--plan">
                <h2>{selectedGymAddress.gymName}</h2>
                <p>{selectedGymAddress.gymStreet}</p>
                <div>
                  {selectedGymAddress.plans.map((plan, index) => (
                    <div key={index}>
                      <h3>{planTitle(index)}</h3>
                      <p>Price: {plan.Price}€/month</p>
                      <ul>
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            {feature.name} - {feature.benefits ? "+" : "-"}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comparison;