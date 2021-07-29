import styled from "styled-components/macro";

const BarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* grid-template-columns: auto 1fr auto; */
  margin: 10px 0;
`;

const BarContainer = styled.div`
  height: 20px;
  width: 100%;
  background-color: #ddd;
  margin: 19.2px 17x 0;
  position: relative;
`;

const StarsTitle = styled.p`
  margin: 0;
  margin-top: 5px;
  margin-right: 5px;
  margin-left: -5px;
`;

const CustomerAmount = styled.p`
  margin: 0;
  margin-top: 5px;
  margin-right: -100px;
`;

const BarProgressFiller = styled.div`
  height: 100%;
  width: ${(props) => `${props.value}%`};
  background-color: blue;
  position: absolute;
`;

export {
  BarContainer,
  StarsTitle,
  CustomerAmount,
  BarWrapper,
  BarProgressFiller,
};
