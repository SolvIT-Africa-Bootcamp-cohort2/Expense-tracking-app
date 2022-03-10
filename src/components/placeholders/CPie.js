import React from "react";
import Shimmer from "react-shimmer-effect";
import "../../styles/placeholders.scss";

function CPie() {
  return (
    <div className="cicular-pie mt-3">
      <Shimmer>
        <div className="circle"></div>
      </Shimmer>
      <div style={{ width: "30%" }}>
        <Shimmer>
          <div style={{ height: "15px", width: "100%" }}></div>
        </Shimmer>
        <Shimmer>
          <div style={{ height: "15px", width: "100%" }}></div>
        </Shimmer>
        <Shimmer>
          <div style={{ height: "15px", width: "100%" }}></div>
        </Shimmer>
        <Shimmer>
          <div style={{ height: "15px", width: "100%" }}></div>
        </Shimmer>
      </div>
    </div>
  );
}

export default CPie;
