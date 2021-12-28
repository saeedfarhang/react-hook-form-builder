import { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { FormInputsContext } from "../contexts/formInputs.context";
import ValidationForm from "./ValidationForm";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  padding: 10px;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    justify-content: center;
    gap: 20px;
  }
  .options-holder {
    width: 100%;
  }
`;
const CreateLayout = ({ layoutDetail, setLayoutDetail }) => {
  
  const { setInputs } = useContext(FormInputsContext);
  const handleCreateLayout = () => {
    setInputs((state) => ({
      ...state,
      [layoutDetail.name]: layoutDetail,
    }));
    setLayoutDetail({
      name: "",
      type: "text",
      options: undefined,
      validation: undefined,
    });
  };

  const [haveOptions, setHaveOptions] = useState(false);
  useMemo(() => {
    switch (layoutDetail.type) {
      case "select":
      case "radio":
        setHaveOptions(true);
        break;

      default:
        setHaveOptions(false);
        break;
    }
  }, [layoutDetail.type]);

  return (
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={layoutDetail.name}
          onChange={(e) =>
            setLayoutDetail((state) => ({ ...state, name: e.target.value }))
          }
          type="text"
          placeholder="name"
        />
        <select
          value={layoutDetail.type}
          onChange={(e) =>
            setLayoutDetail((state) => ({ ...state, type: e.target.value }))
          }
        >
          <option value="text">text</option>
          <option value="password">password</option>
          <option value="select">select</option>
          <option value="checkbox">checkbox</option>
          <option value="radio">radio</option>
          <option value="number">number</option>
          <option value="textarea">textarea</option>
          <option value="email">email</option>
          <option value="range">range</option>
        </select>
        {haveOptions && (
          <div className="options-holder flex-col">
            <input
              style={{ width: "100%" }}
              value={layoutDetail.options}
              onChange={(e) =>
                setLayoutDetail((state) => ({
                  ...state,
                  options: e.target.value,
                }))
              }
              placeholder="options"
            />
            <p style={{ width: "min-content" }}>
              separate options with , example: value1:label1,value2:label2
            </p>
          </div>
        )}
        <span>
          <label htmlFor="validCheck">need validation?</label>
          <input
            id="validCheck"
            type="checkbox"
            checked={layoutDetail.haveValidation}
            label=""
            onClick={() =>
              setLayoutDetail((state) => ({
                ...state,
                haveValidation: !state.haveValidation,
              }))
            }
          />
        </span>
        {layoutDetail.haveValidation && (
          <ValidationForm
            layoutDetail={layoutDetail}
            setLayoutDetail={setLayoutDetail}
          />
        )}
        <button onClick={() => handleCreateLayout()}>submit</button>
      </form>
    </Container>
  );
};
export default CreateLayout;
