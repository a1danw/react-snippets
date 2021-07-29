import styled from "styled-components";

export const InputWrapper = styled.div``;
export const InputBox = styled.input`
  width: ${(props) => (props.size === "medium" ? "120px" : "80px")};
  height: ${(props) => (props.size === "medium" ? "24px" : "16px")};
`;
