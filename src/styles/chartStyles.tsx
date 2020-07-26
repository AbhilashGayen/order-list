import styled from "styled-components";

//Chart Styles

//Chart Row Conainer
export const ChartRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

//Individual Chart Element Container
export const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  height: 8rem;
  width: 23%;
  padding: 1rem;
  border: 2px solid #dde0e5;
  border-radius: 8px;
`;

//Data style for chart data
export const Data = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 0.5rem;
  font-size: 1rem;

  h3 {
    color: #808998;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
  }
`;

//Chart style
export const Chart = styled.div`
  width: 50%;
  padding-left: 0.5rem;
  overflow: hidden;
  align-content: center;
`;
