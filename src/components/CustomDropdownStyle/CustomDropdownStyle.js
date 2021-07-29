import React, { useState, useRef, useEffect } from "react";
import {
  Dropdown,
  DropdownBtn,
  DropdownContent,
  DropdownItem,
} from "./CustomDropdown.styles";

const CustomDropdownStyle = () => {
  const node = useRef();

  const [selected, setSelected] = useState("Choose One");
  const [isOpen, setIsOpen] = useState(false);
  const [hoverState, setHoverState] = useState(false);
  const options = ["React", "Vue", "Angular"];

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }

    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <Dropdown ref={node}>
      <DropdownBtn onClick={(e) => setIsOpen(!isOpen)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </DropdownBtn>
      {isOpen && (
        <DropdownContent>
          {options.map((option) => (
            <DropdownItem
              selected={selected === option}
              hoverState={hoverState}
              onClick={(e) => {
                setSelected(option);
                setIsOpen(false);
                setHoverState(true);
                console.log(selected);
              }}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </Dropdown>
  );
};

export default CustomDropdownStyle;
