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
  justify-content: space-evenly;

  .cell {
    display: flex;
    margin: 0.5rem 0.5rem;
    padding: 0 0.2rem;
    align-items: center;
    justify-content: flex-start;
  }

  .checkbox {
    min-width: 3%;
    max-width: 3%;
  }
  .order_id {
    min-width: 8%;
    max-width: 8%;
  }
  .created_date {
    min-width: 11%;
    max-width: 11%;
  }
  .customer {
    min-width: 16%;
    max-width: 16%;
  }
  .fulfillment {
    min-width: 14%;
    max-width: 14%;
  }
  .total {
    min-width: 8%;
    max-width: 8%;
  }
  .profit {
    min-width: 7%;
    max-width: 7%;
  }
  .status {
    min-width: 10%;
    max-width: 10%;
  }
  .updated {
    min-width: 11%;
    max-width: 11%;
    justify-content: flex-end;
  }
`;

//Table Header
export const TableHeaderContainer = styled(RowContainer)`
  background: #f5f7f9;
  border: none;
  padding-top: 1rem;
  position: sticky;
  top: 9rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: #232323;
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

//Individual Filter
export const TabFilter = styled.div`
  display: flex;
  color: #808998;
  margin: 0.5rem 1.5rem -1px 0;
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    color: #2060da;
    border-bottom: 2px solid #2060da;
  }
  &.active_tab {
    color: #2060da;
    border-bottom: 2px solid #2060da;
  }
`;
