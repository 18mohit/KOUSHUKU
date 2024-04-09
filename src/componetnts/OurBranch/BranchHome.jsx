import React, { useState } from "react";
import StateList from "./StateList";
import DistrictList from "./DistrictList";
import BranchData from "./BranchData";
// import Map from "./Map";

function BranchHome() {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const handleStateClick = (state) => {
    setSelectedState(state);
    setSelectedDistrict(null); // Reset selected district when a new state is selected
  };

  const handleDistrictClick = (district) => {
    setSelectedDistrict(district);
  };
  return (
    <>
          <div>
        <StateList
         states={BranchData} onSelectState={handleStateClick} />
        {selectedState && (
          <DistrictList
            selectedState={selectedState}
            onSelectDistrict={handleDistrictClick}
          />
        )}
      </div>
    </>
  );
}

export default BranchHome;
