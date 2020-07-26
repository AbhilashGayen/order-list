import React from "react";
import {
  ChartRow,
  ChartContainer,
  Data,
  Chart,
} from "../../styles/chartStyles";
import AreaChart from "./areaChart";

const Charts = () => {
  return (
    <>
      <ChartRow>
        <ChartContainer>
          <Data>
            <h3>Active Orders</h3>
            <p>1 046</p>
          </Data>
          <Chart>
            <AreaChart />
          </Chart>
        </ChartContainer>
      </ChartRow>
      <AreaChart />
    </>
  );
};

export default Charts;
