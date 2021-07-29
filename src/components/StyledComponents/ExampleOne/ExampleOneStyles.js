import React from "react";
import { ThemeProvider } from "styled-components";

import { Button } from "./Button";
import { Wrapper } from "./Wrapper";
import { HeaderText } from "./HeaderText";
import Input from "./Input";

const theme = {
  font: "Calibri",
};

const theme2 = {
  font: "Arial",
};

const ExampleOneStyles = () => (
  <Wrapper>
    <ThemeProvider theme={theme}>
      <HeaderText>I am some header text!</HeaderText>
    </ThemeProvider>
    <Button primary>Primary</Button>
    {/* <button className="btn btn-primary"></button> */}
    <Button>Regular</Button>
    <ThemeProvider theme={theme2}>
      <HeaderText>I am more header text!</HeaderText>
      <Input size="medium" /> <br />
    </ThemeProvider>
    <Input />
  </Wrapper>
);

export default ExampleOneStyles;
