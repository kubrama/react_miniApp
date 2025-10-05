import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 12px;
  background: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 5px;

  &:focus {
    outline: none;
    border-color: #0077ff;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  min-height: 120px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 5px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #0077ff;
  }
`;

export const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background: black;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background:grey;
  }

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;
