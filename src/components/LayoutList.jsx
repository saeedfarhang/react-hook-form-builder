import { useContext } from "react";
import styled from "styled-components";
import { FormInputsContext } from "../contexts/formInputs.context";
import Button from "../elements/Button";
import Separator from "../elements/Separator";
import Typography from "../elements/Typography";
import LayoutItem from "./LayoutItem";

const LayoutList = ({ layouts, layoutDetail, setLayoutDetail }) => {
  const { inputs, setInputs } = useContext(FormInputsContext);
  const handleDeleteInput = (name) => {
    setInputs((state) => ({
      ...state,
      [name]: undefined,
    }));
  };
  const handleEditInput = (item) => {
    console.log(Object.values(inputs).filter((item) => item));
    setLayoutDetail(item);
  };
  return (
    <div className="layouts-list">
      <Separator title="Layout" />
      <Typography
        variant="p"
        weight="400"
        margin="0"
        fontSize="0.75rem"
        color={"#ffffff"}
      >
        You can start adding fields with Input Creator.
      </Typography>
      <div className="sp-h-20"></div>
      {Object.keys(inputs).length > 0 ? (
        <div className="layout-items-holder">
          {Object.keys(inputs).map(
            (key) =>
              inputs[key] && (
                <LayoutItem
                  key={inputs[key].name}
                  name={inputs[key].name}
                  type={inputs[key].type}
                  onDelete={handleDeleteInput}
                  onEdit={() => handleEditInput(inputs[key])}
                />
              )
          )}
          {Object.values(inputs).filter((item) => item).length > 0 && (
            <Button
              onClick={() => {
                setInputs({});
              }}
              className="btn-low btn-delete-all"
            >
              delete all
            </Button>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default LayoutList;
