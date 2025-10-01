import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  max-width: 400px;
  margin-inline: auto;

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
  }

  button {
    padding: 8px;
    background: black;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: white;
      color: black;
      border: 1px solid black;
    }
  }
`;

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

export const PostCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    color: #555;
    margin-bottom: 12px;
    text-align: center;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 6px 10px;
    font-size: 14px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
  }

  button:first-child {
    background: #dc3545;
    color: white;

    &:hover {
      background: #a71d2a;
    }
  }

  button:last-child {
    background: black;
    color: white;

    &:hover {
      background: grey;
    }
  }
`;
