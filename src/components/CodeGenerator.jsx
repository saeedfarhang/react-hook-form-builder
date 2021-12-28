import { useEffect, useState } from "react";
import styled from "styled-components";
import { codeStrGenerator } from "../utilities/codeStrGenerator";
import strToOption from "../utilities/convertOptionString";
import TestStage from "./TestStage";

const Container = styled.div`
  width: 100%;
  .code-holder {
    width: 100%;
    max-width: 600px;
    overflow: auto;
  }
  margin: 10px 0 30px 0;
`;
const CodeGenerator = ({ inputs }) => {
  const [inputElms, setInputElms] = useState([]);
  useEffect(() => {
    let tempElms = [];
    Object.values(inputs).map((item) => {
      if (item) {
        if (!item.options) {
          tempElms.push(
            `<input {...register${
              item.validation
                ? `("${item.name}",${JSON.stringify(item.validation)})`
                : ""
            }} ${item.type ? `type="${item.type}"` : ""} ${
              item.value ? `value="${item.value}"` : ""
            } ${
              item.name ? `name="${item.name}" placeholder="${item.name}"` : ""
            }/>`
          );
        } else if (item.options && item.type === "radio") {
          strToOption(item.options).map((option) => {
            tempElms.push(
              `
              <input {...register${
                item.validation
                  ? `("${item.name}"{${JSON.stringify(item.validation)})`
                  : ""
              }} ${item.type ? `type="${item.type}"` : ""} ${
                option.value ? `value="${option.value}"` : ""
              } ${item.name ? `name="${item.name}"` : ""}/>
              `
            );
          });
        } else if (item.options && item.type === "select") {
          tempElms.push(
            `
            <select {...register${
              item.validation
                ? `("${item.name}",${JSON.stringify(item.validation)})`
                : ""
            }} ${item.name ? `name="${item.name}"` : ""}>
              ${strToOption(item.options).map((option) =>
                ` 
                <option ${option.label ? `value="${option.value}"` : ""}>
                  ${option.label}
                </option> \n`.replaceAll(/,/g, "")
              )}
             </select>
             `
          );
        }
      }
      setInputElms(tempElms);
    });
  }, [inputs]);

  return (
    <Container className="flex-col">
      <div className="code-holder">
        <pre
          style={{
            borderRadius: "15px",
            backgroundColor: "#f0f0f0",
            padding: "5px 10px",
            width: "max-content",
          }}
        >
          {codeStrGenerator(inputElms)}
        </pre>
      </div>
      <TestStage />
    </Container>
  );
};
export default CodeGenerator;
