import React from "react";
import Shimmer from "react-shimmer-effect";

function ManageCategoriesPlaceholders() {
  return (
    <div>
      <div className="mb-3">
        <Shimmer>
          <div style={{ width: "100%", height: 30 }} />
        </Shimmer>
      </div>
      <div className="row">
        <div className="col-md-6 mb-2">
          <Shimmer>
            <div style={{ width: "100%", height: 250 }} />
          </Shimmer>
        </div>
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <Shimmer>
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
                <div style={{ width: "100%", height: 20 }} />
              </Shimmer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCategoriesPlaceholders;
