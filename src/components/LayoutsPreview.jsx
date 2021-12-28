import { useContext, useEffect } from "react";
import styled from "styled-components";
import { FormInputsContext } from "../contexts/formInputs.context";
import strToOption from "../utilities/convertOptionString";
import CodeGenerator from "./CodeGenerator";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .form-space {
    gap: 10px;
  }
`;
const LayoutsPreview = (props) => {
  const { inputs } = useContext(FormInputsContext);
  return (
    <Container>
      <p>preview</p>
      <br />
      <div className="flex-col form-space">
        {Object.keys(inputs).length > 0
          ? Object.keys(inputs).map(
              (key) =>
                inputs[key] &&
                (!inputs[key].options ? (
                  <input
                    key={inputs[key].name}
                    name={inputs[key].name}
                    placeholder={inputs[key].name}
                    type={inputs[key].type}
                  />
                ) : inputs[key].type === "select" && inputs[key].options ? (
                  <select
                    key={inputs[key].name}
                    name={inputs[key].name}
                    placeholder={inputs[key].name}
                    type={inputs[key].type}
                  >
                    {strToOption(inputs[key].options).map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  inputs[key].type === "radio" &&
                  inputs[key].options &&
                  strToOption(inputs[key].options).map((option) => (
                    <input
                      type="radio"
                      key={option.value}
                      value={option.value}
                      name={inputs[key].name}
                    />
                  ))
                ))
            )
          : ""}
      </div>
      <CodeGenerator inputs={inputs} />
    </Container>
  );
};
export default LayoutsPreview;
