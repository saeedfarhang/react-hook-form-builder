import { useEffect, useState } from "react";
import styled from "styled-components";
import Separator from "../elements/Separator";
import Typography from "../elements/Typography";
import { codeStrGenerator } from "../utilities/codeStrGenerator";
import strToOption from "../utilities/convertOptionString";
import TestStage from "./TestStage";

const CodeGenerator = ({ inputs }) => {
  const [inputElms, setInputElms] = useState([]);
  useEffect(() => {
    let tempElms = [];
    Object.values(inputs)
      .filter((item) => item)
      .map((item) => {
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
                item.name
                  ? `name="${item.name}" placeholder="${item.name}"`
                  : ""
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
    <div className="code-container flex-col">
      <Separator title={"Code"} />
      <Typography
        variant="p"
        weight="400"
        margin="0"
        fontSize="0.75rem"
        color={"#ffffff"}
      >
        As you are making changes over the form, the code section will be
        updated and you can copy the code as well.
      </Typography>
      <div className="code-holder">
        <pre className="code-view">{codeStrGenerator(inputElms)}</pre>
      </div>
      {/* <TestStage /> */}
    </div>
  );
};
export default CodeGenerator;
