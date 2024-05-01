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
          {/* GTM Script in the head */}
          <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MHHRSMGQ');
          `,
        }}
      />
      {/* End GTM Script */}
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
