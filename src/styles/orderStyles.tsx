//Styles
import styled from "styled-components";

//Row Styles
export const RowContainer = styled.div`
  display: flex;
  margin: 1rem 0.5rem;
  padding: 0.2rem 1rem;
  width: 100%;
  border: 2px solid #dde0e5;
  border-radius: 5px;
  background: #fff;

  > :nth-child(1) {
    width: 4%;
  }
  > :nth-child(2) {
    width: 10%;
  }
  > :nth-child(3) {
    width: 10%;
  }
  > :nth-child(4) {
    width: 18%;
  }
  > :nth-child(5) {
    width: 15%;
    margin-right: 3%;
  }
  > :nth-child(6) {
    width: 9%;
  }
  > :nth-child(7) {
    width: 7%;
  }
  > :nth-child(8) {
    width: 12%;
  }
  > :nth-child(9) {
    width: 10%;
    justify-content: flex-end;
  }
`;

export const Cell = styled.div`
  display: flex;
  margin: 0.5rem 0.5rem;
  padding: 0 0.3rem;
  align-items: center;
  justify-content: flex-start;
`;

//Table Header
export const TableHeaderContainer = styled(RowContainer)`
  background: #f5f7f9;
  border: none;
  padding-top: 1rem;
  position: sticky;
  top: 9rem;
  z-index: 3;
`;

//Tab Conainter
export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  position: sticky;
  top: 5rem;
  flex-direction: row;
  justify-content: space-between;
  background: #f5f7f9;
  border-bottom: 2px solid #dde0e5;
  margin: 1rem 0.5rem;
  z-index: 4;
`;

//Filter container
export const FilterConainter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TabFilter = styled.div`
  display: flex;
  color: #808998;
  margin: 0.5rem 1.5rem -1px 0;
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  :hover {
    color: #2060da;
    border-bottom: 2px solid #2060da;
  }
  &.active_tab {
    color: #2060da;
    border-bottom: 2px solid #2060da;
  }
`;
