import React from "react";

import { ResponsiveLine } from "@nivo/line";

type Charts = {
  id: string;
  color: string;
  chartData: {
    x: number;
    y: number;
  }[];
};

const AreaChart: React.FC<Charts> = ({ id, color, chartData }) => {
  const plotPoints: any = chartData.map((plotPoints) => plotPoints);
  const data = [{ id: id, color: color, data: plotPoints }];
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 1, right: 0, bottom: 0, left: 0 }}
      xScale={{ type: "linear" }}
      yScale={{
        type: "linear",
        min: 3,
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
      colors={color}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      pointLabelYOffset={-12}
      enableArea={true}
      areaOpacity={0.25}
      enableCrosshair={false}
      useMesh={false}
      legends={[]}
    />
  );
};

export default AreaChart;
