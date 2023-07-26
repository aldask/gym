import React, { useState } from "react";
import { slides, SlideContent } from "../../Data/locationsData";
import True from "../../Images/Misc/Ok.png";
import False from "../../Images/Misc/No.png";

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
            <h2>
              Choose your <br />
              membership
            </h2>
            <div className="comparison-box__top--selection">
              <label>Select the club below to see the options</label>
              <select name="gyms" onChange={handleSelectedGym}>
                {slides.map((gym) => (
                  <option key={gym.gymName} value={gym.gymName}>
                    {gym.gymName}
                  </option>
                ))}
              </select>
            </div>
            <div className="comparison-box__top--display">
              <h2>{selectedGymAddress.gymName}</h2>
              <p>{selectedGymAddress.gymStreet}</p>
              <div className="comparison-box__top--display--plans">
                {selectedGymAddress.plans.map((plan, index) => (
                  <div
                    key={index}
                    className="comparison-box__top--display--plans--plan"
                  >
                    <h3>{planTitle(index)}</h3>
                    <p>
                      €{plan.Price}
                      <span>/month</span>
                    </p>
                    <ul>
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          {feature.benefits ? (
                            <span>
                              <img src={True} alt="yes" />
                            </span>
                          ) : (
                            <span>
                              <img src={False} alt="no" />
                            </span>
                          )}{" "}
                          {feature.name}
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
    </section>
  );
}

export default Comparison;
