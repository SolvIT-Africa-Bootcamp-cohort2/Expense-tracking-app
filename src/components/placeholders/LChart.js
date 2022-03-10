import React from "react";
import Shimmer from "react-shimmer-effect";
import "../../styles/placeholders.scss";

function LChart() {
  return (
    <Shimmer>
      <div className="line-chart"></div>
    </Shimmer>
  );
}

export default LChart;
