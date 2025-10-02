import styled from "styled-components"

export const Container = styled.div`
  padding: 20px 80px;
`;

export const Content = styled.div`
  display:flex;
  gap:50px;
  margin-top:50px
`;

export const Image=styled.img`
width:70%;
`;

export const Text= styled.div`
width:80%;
`;
export const Desc= styled.p`
line-height:1.9;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: black;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: grey;
  }
`;

export const Banner=styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`
export const Heading =styled.h2`
text-align:center;
margin-top:70px;
font-size:40px;
color:#333333;
`

