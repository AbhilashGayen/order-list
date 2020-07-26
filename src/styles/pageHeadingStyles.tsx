import styled from "styled-components";

export const HeadingContainer = styled.div`
  display: flex;
  margin: 3rem 0;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  margin-left: 1rem;
  background-color: #1e61dc;
  color: #fff;
  border: none;
  border-radius: 6px;
  width: 9rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: not-allowed;

  :hover {
    background-color: transparent;
    color: #1e61dc;
    border: 2px solid #1e61dc;
  }
`;
