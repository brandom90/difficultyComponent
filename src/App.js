import React, { useState } from 'react';

const Slider = () => {
  const [Weight, setWeight] = useState(135)
  const [sliderValue, setSliderValue] = useState(5); 
  const DesiredVal = 5
  const AssesedVal = sliderValue

  const AsseseNum = () => {
  const difference = AssesedVal - DesiredVal;
  const weightChange = difference * 5; 

  if (difference === 0) {
    console.log("no change");
  } else {
    setWeight(prevWeight => prevWeight - weightChange); // Update the weight based on the calculated change
    console.log(Weight);
  }
};

  const handleSliderChange = (e) => {
    setSliderValue(parseInt(e.target.value)); 
    

  };
  const handleButtonClick = () => {
    AsseseNum()
  };
  return (
    <div>
      <label>Difficulty Slider</label>
      <input
        type="range"
        
        min={1} // Minimum value for the slider
        max={10} // Maximum value for the slider
        step={1} // Step size for increments/decrements
        value={sliderValue} // Controlled by state
        onChange={handleSliderChange} // Handle slider changes
      />
      <div>
      <button onClick={handleButtonClick}>Submit</button>
      </div>
      <p>Selected Weight: {Weight}</p>
      <p>Selected Difficulty: {sliderValue}</p>
      
    </div>
  );
};

export default Slider;

// after finish make slider disappear after inital input
//