import React from "react";
import {
  ChartRow,
  ChartContainer,
  Data,
  Chart,
} from "../../styles/chartStyles";
import AreaChart from "./areaChart";

const data = [
  {
    heading: "Active Orders",
    amount: "1 046",
    chartPoints: [
      {
        id: "active_orders",
        color: "#3D66B8",
        axisPoints: [
          {
            x: 0,
            y: 9,
          },
          {
            x: 1,
            y: 11,
          },
          {
            x: 2,
            y: 10,
          },
          {
            x: 3,
            y: 10.5,
          },
          {
            x: 4,
            y: 10.2,
          },
          {
            x: 5,
            y: 7,
          },
          {
            x: 6,
            y: 8,
          },
          {
            x: 7,
            y: 11,
          },
          {
            x: 8,
            y: 10.5,
          },
          {
            x: 9,
            y: 9,
          },
          {
            x: 10,
            y: 10,
          },
        ],
      },
    ],
  },
  {
    heading: "Unfulfilled",
    amount: "159",
    chartPoints: [
      {
        id: "active_orders",
        color: "#E4B14A",
        axisPoints: [
          {
            x: 0,
            y: 9,
          },
          {
            x: 1,
            y: 11,
          },
          {
            x: 2,
            y: 10.2,
          },
          {
            x: 3,
            y: 11,
          },
          {
            x: 4,
            y: 7,
          },
          {
            x: 5,
            y: 8,
          },
          {
            x: 6,
            y: 7.5,
          },
          {
            x: 7,
            y: 11,
          },
          {
            x: 8,
            y: 6,
          },
          {
            x: 9,
            y: 7.5,
          },
        ],
      },
    ],
  },
  {
    heading: "Pending Receipt",
    amount: "624",
    chartPoints: [
      {
        id: "act#ive_orders",
        color: "#834EA4",
        axisPoints: [
          {
            x: 0,
            y: 8,
          },
          {
            x: 1,
            y: 7,
          },
          {
            x: 2,
            y: 9,
          },
          {
            x: 3,
            y: 8.5,
          },
          {
            x: 4,
            y: 10,
          },
          {
            x: 5,
            y: 9,
          },
          {
            x: 6,
            y: 9.5,
          },
          {
            x: 7,
            y: 9,
          },
          {
            x: 8,
            y: 7,
          },
          {
            x: 9,
            y: 8.5,
          },
        ],
      },
    ],
  },
  {
    heading: "Fulfilled",
    amount: "263",
    chartPoints: [
      {
        id: "active_orders",
        color: "#60B296",
        axisPoints: [
          {
            x: 0,
            y: 8,
          },
          {
            x: 1,
            y: 9,
          },
          {
            x: 2,
            y: 6,
          },
          {
            x: 3,
            y: 10,
          },
          {
            x: 4,
            y: 9,
          },
          {
            x: 5,
            y: 10,
          },
          {
            x: 6,
            y: 9.5,
          },
          {
            x: 7,
            y: 10,
          },
          {
            x: 8,
            y: 8,
          },
          {
            x: 9,
            y: 8.5,
          },
        ],
      },
    ],
  },
];

const Charts = () => {
  return (
    <>
      <ChartRow>
        {data.map((status) => (
          <ChartContainer key={status.heading}>
            <Data>
              <h3>{status.heading}</h3>
              <p>{status.amount}</p>
            </Data>
            <Chart>
              <AreaChart
                id={status.chartPoints[0].id}
                color={status.chartPoints[0].color}
                chartData={status.chartPoints[0].axisPoints}
              />
            </Chart>
          </ChartContainer>
        ))}
      </ChartRow>
    </>
  );
};

export default Charts;
