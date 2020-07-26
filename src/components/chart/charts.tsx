import React from "react";
import {
  ChartRow,
  ChartContainer,
  Data,
  Chart,
} from "../../styles/chartStyles";
import AreaChart from "./areaChart";

//TODO: Need to add unique chart data

const data = [
  {
    heading: "Active Orders",
    amount: "1 046",
  },
  {
    heading: "Unfulfilled",
    amount: "159",
  },
  {
    heading: "Pending Receipt",
    amount: "624",
  },
  {
    heading: "Fulfilled",
    amount: "263",
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
              <AreaChart />
            </Chart>
          </ChartContainer>
        ))}
      </ChartRow>
      <AreaChart />
    </>
  );
};

export default Charts;
