import { useContext } from "react";
import styled from "styled-components";
import { FormInputsContext } from "../contexts/formInputs.context";
import LayoutItem from "./LayoutItem";

const Container = styled.div`
  min-width: 300px;
`;
const LayoutList = ({ layouts, layoutDetail, setLayoutDetail }) => {
  const { inputs, setInputs } = useContext(FormInputsContext);
  const handleDeleteInput = (name) => {
    setInputs((state) => ({
      ...state,
      [name]: undefined,
    }));
  };
  const handleEditInput = (item) => {
    console.log(item);
    setLayoutDetail(item);
  };
  return (
    <Container>
      {Object.keys(inputs).length > 0
        ? Object.keys(inputs).map(
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
          )
        : ""}
    </Container>
  );
};
export default LayoutList;
