import React, { useState } from "react";

function DropdownOne() {
  const [language, setLanguage] = useState("en-GB");
  const [selected, setSelected] = useState({});

  const dropdownSelectionData = [
    {
      title: "Computer Brands",
      options: [
        {
          index: 0,
          value: {
            "en-GB": "Dell",
            "fr-FR": "Vallon",
          },
        },
        {
          index: 1,
          value: {
            "en-GB": "Apple",
            "fr-FR": "Pomme",
          },
        },
        {
          index: 2,
          value: {
            "en-GB": "Razer",
            "fr-FR": "Rasoir",
          },
        },
      ],
    },
    {
      title: "Size",
      options: [
        {
          index: 0,
          value: {
            "en-GB": "13 inch",
            "fr-FR": "13 pouce",
          },
        },
        {
          index: 1,
          value: {
            "en-GB": "15 inch",
            "fr-FR": "15 pouce",
          },
        },
        {
          index: 2,
          value: {
            "en-GB": "18 inch",
            "fr-FR": "18 pouce",
          },
        },
      ],
    },
    {
      title: "Guarantee",
      options: [
        {
          index: 0,
          value: {
            "en-GB": "12 Months",
            "fr-FR": "12 mois",
          },
        },
        {
          index: 1,
          value: {
            "en-GB": "2 Years",
            "fr-FR": "2 annees",
          },
        },
        {
          index: 2,
          value: {
            "en-GB": "5 Years",
            "fr-FR": "5 annees",
          },
        },
      ],
    },
  ];

  function onSelect(event) {
    // console.log("event test:", event.target.value);
    setLanguage(event.target.value);
  }

  // console.log("selected test:", selected);

  const entries = Object.entries(selected);
  // console.log("entires test:", entries);

  const selections = entries.map((entry) => {
    const [title, index] = entry;

    const attribute = dropdownSelectionData.find((data) => {
      return data.title === title;
    });
    // console.log("attribute test:", attribute);
    const option = attribute.options[index];
    // console.log("option test:", option);
    const translated = option.value[language];

    return (
      <p>
        {title}: {translated}
      </p>
    );
  });

  return (
    <>
      {/* <ComputerLabel dropdownSelectionData={dropdownSelectionData} /> */}
      <select onChange={onSelect}>
        <option>en-GB</option>
        <option>fr-FR</option>
      </select>
      <InputDropdown
        dropdownSelectionData={dropdownSelectionData}
        language={language}
        selected={selected}
        setSelected={setSelected}
      />
      {selections}
    </>
  );
}

export default DropdownOne;

function InputDropdown({
  dropdownSelectionData,
  language,
  selected,
  setSelected,
}) {
  console.log(dropdownSelectionData);

  return (
    <>
      {dropdownSelectionData.map((attribute) => {
        // console.log("attribute test:", attribute);
        function onChange(event) {
          const newSelected = { ...selected };

          newSelected[attribute.title] = event.target.value;
          console.log("newSelected test:", newSelected);

          setSelected(newSelected);
        }
        return (
          <>
            <h3>{attribute.title}</h3>
            <select onChange={onChange}>
              {attribute.options.map((option) => {
                return (
                  <option value={option.index}>{option.value[language]}</option>
                );
              })}
            </select>
          </>
        );
      })}
    </>
  );
}
