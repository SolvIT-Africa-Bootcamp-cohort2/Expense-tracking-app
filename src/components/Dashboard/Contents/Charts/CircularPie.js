import React, { Component } from "react";
import Chart from "react-apexcharts";

export class CircularPie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["FOODS", "CLOTHING", "AIRTIME", "PAY LOAN", "TRIP"],
        title: {
          text: "EXPENSES",
          align: "left",
        },
        theme: {
          palette: "palette6",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
        />
      </div>
    );
  }
}

export default CircularPie;
