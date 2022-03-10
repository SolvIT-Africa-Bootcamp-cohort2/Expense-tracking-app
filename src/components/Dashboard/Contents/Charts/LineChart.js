import React, { Component } from "react";
import Chart from "react-apexcharts";
import LChart from "../../../placeholders/LChart";

export class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Expense",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
        {
          name: "Income",
          data: [35, 41, 62, 0, 0, 18, 29, 37, 36, 51, 32, 35],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        colors: ["#ecaa11", "#5e419a"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [2, 2],
          curve: "smooth",
        },
        title: {
          text: "INCOME VS EXPENSE",
          align: "left",
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              " - " +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ""
            );
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "Jully",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " per month";
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val + " per month";
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
          ],
        },
        grid: {
          borderColor: "#f1f1f1",
        },
      },
    };
  }

  render() {
    return (
      <div>
        {this.props.isLoadingAccountContents ? (
          <LChart />
        ) : (
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
          />
        )}
      </div>
    );
  }
}

export default LineChart;
