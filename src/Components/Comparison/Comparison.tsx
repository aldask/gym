import { slides, SlideContent } from "../../Data/locationsData"; // Assuming you have SlideContent type defined in the locationsData file
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
              <label>{selectedGymAddress.gymStreet}</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comparison;
