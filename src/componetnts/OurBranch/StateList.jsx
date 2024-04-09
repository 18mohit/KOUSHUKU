import React, { useState, useEffect } from "react";

function StateList({ states, onSelectState }) {
  const [selectedStateIndex, setSelectedStateIndex] = useState(0); 

  useEffect(() => {
    onSelectState(states[selectedStateIndex]);
  }, []); 

  const handleStateSelection = (state, index) => {
    setSelectedStateIndex(index); 
    onSelectState(state); 
  };

  return (
    <div>
      <div>
        <ul className="grid sm:grid-cols-8 grid-cols-4 gap-[3vw] p-2 text-center font-serif text-[5vw] sm:text-[1.5vw] bg-gray-800 bg-opacity-90">
          {states.map((state, index) => (
            <li key={index} onClick={() => handleStateSelection(state, index)}>
              <div className={`Hstate hover:cursor-pointer hover:translate-y-5 hover:text-white transition-all duration-700 ${index === selectedStateIndex ? 'selected' : ''}`}>
                {state.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StateList;
