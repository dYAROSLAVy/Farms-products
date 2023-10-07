import React from "react";
import { OptionUl, Property } from "./styles";

function OptionList({ list = [], delimiter = ": " }) {
  return (
    <OptionUl>
      {list.map((option, index) => (
        <li key={`tab${index * 10}`}>
          <Property>
            {option.property}
            {delimiter}
          </Property>
          {option.value}
        </li>
      ))}
    </OptionUl>
  );
}

export default OptionList;
