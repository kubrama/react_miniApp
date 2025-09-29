
import styled from "styled-components";

export const CounterWrapper = styled.div`
  margin-top: 12px;
`;

export const CounterButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;

  button {
    font-size: 16px;
    padding: 6px 12px;
    border: 1px solid black;
    border-radius: 6px;
    cursor: pointer;
    background-color: black;
    color: white;
    transition: all 0.3s;

    &:hover {
      background-color: white;
      color: black;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
      color: #666;
    }
  }
`;
