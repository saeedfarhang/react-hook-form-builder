import { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { FormInputsContext } from "../contexts/formInputs.context";
import Button from "../elements/Button";
import Separator from "../elements/Separator";
import Typography from "../elements/Typography";
import ValidationForm from "./ValidationForm";

const CreateLayout = ({ layoutDetail, setLayoutDetail }) => {
  const { inputs, setInputs } = useContext(FormInputsContext);
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
    <div className="create-holder">
      <Separator title="Input Creator" />
      <Typography
        variant="p"
        weight="400"
        margin="0 0 10px 0"
        fontSize="0.75rem"
        color={"#ffffff"}
      >
        This form allows you to create and update inputs. The Generate Form
        button will create a new form with the updates.
      </Typography>
      <div className="create-layout">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name-h">Name:</label>
          <input
            id="name-h"
            value={layoutDetail.name}
            onChange={(e) =>
              setLayoutDetail((state) => ({ ...state, name: e.target.value }))
            }
            type="text"
          />
          <label htmlFor="type-h">Type:</label>
          <select
            id="type-h"
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
          <span className="check-holder flex-center">
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
            <label htmlFor="validCheck">need validation?</label>
          </span>
          {layoutDetail.haveValidation && (
            <ValidationForm
              layoutDetail={layoutDetail}
              setLayoutDetail={setLayoutDetail}
            />
          )}
          <div className="create-actions flex-col-center">
            <Button
              className="btn-pinky w-100"
              onClick={() => handleCreateLayout()}
            >
              create
            </Button>
            {Object.values(inputs).filter((item) => item).length > 0 && (
              <>
                <div className="sp-h-10"></div>
                <Separator title="or" className="sm-f" />
                <div className="sp-h-10"></div>

                <Button
                  className="btn-black w-100"
                  onClick={() => handleCreateLayout()}
                >
                  generate form
                </Button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateLayout;
