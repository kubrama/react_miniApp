import styled from "styled-components";

export const CardWrapper= styled.div`
 border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 250px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    overflow: hidden;
  }
`;

export const CardImage=styled.img`
 width: 100%;
  border-radius: 8px;
`;

export const CardTitle=styled.h3`
margin-top: 12px;
  font-size: 18px;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
`;

export const Counter = styled.div`
  h4 {
    margin-bottom: 8px;
    font-size: 16px;
  }
`;

export const CounterButtons = styled.div`
  button {
    font-size: 16px;
    padding: 6px 12px;
    margin: 0 5px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background-color: black;
    color: white;
    border: 1px solid black;
    transition: all 0.3s;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
`;