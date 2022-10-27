import React, { useState } from "react";
import "./bidMachine.css"

function BidMachine() {
  const [factors, setFactors] = useState(false);

  const toggleFactors = () => {
    setFactors(!factors);
  };

  return (
    <main>
      <h1>Welcome to the Bid Machine</h1>
      <div className="bidmachine-container">
          {factors && (
            <button onClick={toggleFactors}>Turn Off Job Factors</button>
          )}
          {!factors && (
            <button onClick={toggleFactors}>Turn On Job Factors</button>
          )}
          <button>Edit Job Factors</button>
      </div>
    </main>
  );
}

export default BidMachine;
