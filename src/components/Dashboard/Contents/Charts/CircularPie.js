import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import CPie from "../../../placeholders/CPie";

function CircularPie({ isLoadingAccountContents, expensesAndIncome }) {
  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      width: 380,
      type: "pie",
    },
    stroke: {
      width: 1,
    },
    labels,
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
  });

  useEffect(() => {
    const uniqueCategories = () => {
      let amount = [];
      let categoryNames = [];

      const transactions = [];
      if (expensesAndIncome) {
        for (let i = 0; i < expensesAndIncome.length; i++) {
          if (expensesAndIncome[i].type == "expense") {
            transactions.push(expensesAndIncome[i]);
          }
        }

        for (let i = 0; i < transactions.length; i++) {
          if (categoryNames.indexOf(transactions[i].category) != -1) {
            amount[categoryNames.indexOf(transactions[i].category)] +=
              transactions[i].amount;
          } else {
            categoryNames.push(transactions[i].category);
            amount.push(transactions[i].amount);
          }
        }
      }

      setSeries([...amount]);
      setOptions({ ...options, labels: categoryNames });
    };
    uniqueCategories();
  }, [expensesAndIncome]);
  return (
    <div>
      {isLoadingAccountContents ? (
        <CPie />
      ) : (
        <Chart options={options} series={series} type="pie" />
      )}
    </div>
  );
}

export default CircularPie;
