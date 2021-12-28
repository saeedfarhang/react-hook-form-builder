import { useMemo, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const ValidationForm = ({ layoutDetail, setLayoutDetail }) => {
  const [validationForm, setValidationForm] = useState({
    required: false,
    min: undefined,
    max: undefined,
    maxLength: undefined,
    pattern: undefined,
  });
  // useMemo(() => {
  //   setLayoutDetail((state) => ({
  //     ...state,
  //     validation: {
  //       ...validationForm,
  //     },
  //   }));
  // }, [validationForm]);

  return (
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <span>
          <label htmlFor={"required-in"}>required?</label>
          <input
            id="required-in"
            type="checkbox"
            value={validationForm.required}
            onChange={(e) =>
              setValidationForm((state) => ({
                ...state,
                required: e.target.checked,
              }))
            }
          />
        </span>
        <input
          onChange={(e) =>
            setValidationForm((state) => ({
              ...state,
              min: e.target.value,
            }))
          }
          placeholder="min"
          type="number"
        />
        <input
          onChange={(e) =>
            setValidationForm((state) => ({
              ...state,
              max: e.target.value,
            }))
          }
          placeholder="max"
          type="number"
        />
        <input
          onChange={(e) =>
            setValidationForm((state) => ({
              ...state,
              maxLength: e.target.value,
            }))
          }
          placeholder="maxLength"
          type="number"
        />
        <input
          onChange={(e) =>
            setValidationForm((state) => ({
              ...state,
              pattern: e.target.value,
            }))
          }
          placeholder="pattern"
        />
      </form>
    </Container>
  );
};
export default ValidationForm;
