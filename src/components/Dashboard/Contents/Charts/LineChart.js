import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import LChart from "../../../placeholders/LChart";

import moment from "moment";

function LineChart({ isLoadingAccountContents, expensesAndIncome }) {
  const [categories, setCategories] = useState([]);
  const [series, setSeries] = useState([
    {
      name: "Expense",
      data: [],
    },
    {
      name: "Income",
      data: [],
    },
  ]);
  const [options, setOptions] = useState({
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
      categories: categories,
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " per day";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val + " per day";
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
  });

  useEffect(() => {
    let incomes = [];
    let expenses = [];
    let days = [];

    //get the dates
    const generalDate = new Date();
    let generalMonth = generalDate.getMonth() + 1;

    console.log(generalMonth);

    for (let i = 0; i < expensesAndIncome.length; i++) {
      let day = moment(expensesAndIncome[i].created_at).format("D");
      let month = moment(expensesAndIncome[i].created_at).format("M");
      console.log("expense month", month);
      console.log(day, month);
      if (month == generalMonth) {
        if (days.indexOf(day) === -1) {
          days.push(day);
        }
      }
    }

    for (let j = 0; j < days.length; j++) {
      let totalexpenses = 0;
      let totalincomes = 0;
      for (let i = 0; i < expensesAndIncome.length; i++) {
        let day = moment(expensesAndIncome[i].date).format("D");
        let month = moment(expensesAndIncome[i].date).format("M");
        if (month == generalMonth && day == days[j]) {
          if (expensesAndIncome[i].type === "income") {
            totalincomes += expensesAndIncome[i].amount;
          } else {
            totalexpenses += expensesAndIncome[i].amount;
          }
        }
      }
      incomes.push(totalincomes);
      expenses.push(totalexpenses);
    }

    setSeries([
      {
        name: "Expense",
        data: expenses,
      },
      {
        name: "Income",
        data: incomes,
      },
    ]);

    setCategories([...days]);

    console.log(expenses, incomes, days);
    console.log(categories);
  }, [expensesAndIncome]);

  return (
    <div>
      {isLoadingAccountContents ? (
        <LChart />
      ) : (
        <Chart options={options} series={series} type="line" />
      )}
    </div>
  );
}

export default LineChart;
