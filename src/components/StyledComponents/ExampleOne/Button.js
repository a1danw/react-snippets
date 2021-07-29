import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "green" : "red")};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
