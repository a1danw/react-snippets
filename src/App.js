import React, { useState } from "react";
import ProgressBarDataContainer from "./components/ProgressBarData/ProgressBarDataContainer";
// import SegmentedBarContainer from "./components/SegmentedBar/SegmentedBarContainer";
import SegmentedBar from "./components/SegmentedBar/SegmentedBar";
import "./App.css";
import LoadMorePagination from "./components/LoadMorePagination/LoadMorePagination";
import SegmentedBarsContainer from "./components/SegmentedBar/SegmentedBarsContainer";
// Styling
import ExampleOneStyles from "./components/StyledComponents/ExampleOne/ExampleOneStyles";
import ExampleTwoStyles from "./components/StyledComponents/ExampleTwo/ExampleTwoStyles";
// Forms
import BasicForm from "./components/ReactHookFormBasic/Form";
import HookFormController from "./components/ReactHookFormController/HookFormController";
import HookFormControllerTwo from "./components/ReactHookFormController/HookFormControllerTwo";
import ReactHookFormExpando from "./components/ReactHookFormExpando/ReactHookFormExpando";
import ReactHookFormV7Basic from "./components/ReactHookFormV7Basic/ReactHookFormV7Basic";
import ReactHookFormV7Two from "./components/ReactHookFormV7Two/ReactHookFormV7Two";
// Spread/Rest
import SpreadVsRest from "./components/SpreadVsRest/SpreadVsRest";
// Dropdowns
import DropdownOne from "./components/DropdownOne/DropdownOne";
import DropdownTwo from "./components/DropdownTwo/DropdownTwo";
import CascadingDropdown from "./components/CascadingDropdown/CascadingDropwdown";
import CustomDropdownStyle from "./components/CustomDropdownStyle/CustomDropdownStyle";

function App() {
  return (
    <>
      {/* <ProgressBarDataContainer /> <hr /> */}
      {/* <SegmentedBarsContainer /> */}
      {/* <ProgressBarOneContainer /> */}
      {/* <LoadMorePagination /> */}
      {/* Styled components */}
      {/* <ExampleOneStyles /> */}
      {/* <ExampleTwoStyles /> */}

      {/* Forms */}
      {/* <BasicForm /> */}
      {/* <HookFormControllerTwo /> */}
      {/* <ReactHookFormExpando /> */}
      {/* <ReactHookFormV7Basic /> */}
      {/* <ReactHookFormV7Two /> */}

      {/* Spread vs Rest */}
      {/* <SpreadVsRest /> */}

      {/* Dropdowns */}
      {/* <DropdownOne /> */}
      <CustomDropdownStyle />
      {/* <DropdownTwo /> */}
      {/* <CascadingDropdown /> */}
    </>
  );
}

export default App;
