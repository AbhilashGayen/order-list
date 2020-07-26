import React from "react";

import { ResponsiveLine } from "@nivo/line";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
  {
    id: "active_orders",
    color: "hsl(17, 70%, 50%)",
    data: [
      {
        x: 0,
        y: 7,
      },
      {
        x: 1,
        y: 5,
      },
      {
        x: 2,
        y: 11,
      },
      {
        x: 3,
        y: 9,
      },
      {
        x: 4,
        y: 13,
      },
      {
        x: 5,
        y: 16,
      },
      {
        x: 6,
        y: 12,
      },
    ],
  },
];

const AreaChart = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    xScale={{ type: "linear" }}
    yScale={{
      type: "linear",
      min: 0,
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    enableGridX={false}
    enableGridY={false}
    colors={{ scheme: "category10" }}
    enablePoints={false}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="y"
    pointLabelYOffset={-12}
    enableArea={true}
    areaOpacity={0.5}
    enableCrosshair={false}
    useMesh={true}
    legends={[]}
  />
);

export default AreaChart;
