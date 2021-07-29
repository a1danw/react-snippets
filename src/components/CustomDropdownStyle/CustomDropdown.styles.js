import styled from "styled-components";

export const Dropdown = styled.div`
  input {
    -webkit-appearance: none;
    box-shadow: none !important;
  }
  outline: none;
  display: block;
  width: 400px;
  margin: 100px auto;
  position: relative;
`;

export const DropdownBtn = styled.div`
  padding: 15px 20px;
  background: #fff;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  padding: 10px;
  background: #fff;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: 500;
  color: #333;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${(props) => (props.selected ? "green" : "none")};

  &:hover {
    background: #f4f4f4;
  }
`;
