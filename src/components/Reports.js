import React from "react";
import "styled-components/macro";
import AverageCalories from "./AverageCalories";

function Reports() {
  return (
    <div className="py-8 px-12">
      <h1 className="text-3xl font-medium">Reports</h1>
      <div className="flex items-center gap-16 mt-8 text-center">
        <div
          className="flex flex-col items-center justify-center p-8 rounded-lg text-white"
          css={`
            background-image: linear-gradient(to top, #e6776d, #f39671);
          `}
        >
          <p>No. of added todos in last 7 days</p>
          <h1 className="text-[60px] text-medium">68</h1>
        </div>
        <p>VS</p>
        <div
          className="flex flex-col items-center justify-center p-8 rounded-lg text-white"
          css={`
            background-image: linear-gradient(to top, #9bea9d, #3ada8d);
          `}
        >
          <p>No. of added todos in previous week</p>
          <h1 className="text-[60px] text-medium">68</h1>
        </div>
      </div>
      <AverageCalories />
    </div>
  );
}

export default Reports;
