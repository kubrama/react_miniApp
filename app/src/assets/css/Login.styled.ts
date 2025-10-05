import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 60px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 8px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 12px;
  background: black;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #grey;
  }
`;

export const ErrorText = styled.p`
  font-size: 14px;
  color: red;
  margin-top: 10px;
`;
