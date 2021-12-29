import { useMemo, useState } from "react";

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
    <div className="validation-form-holder">
      <form onSubmit={(e) => e.preventDefault()}>
        <span className="check-holder flex-center">
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
          <label htmlFor={"required-in"}>required?</label>
        </span>
        <label htmlFor={"required-in"}>Min</label>
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
        <label htmlFor="max">Max</label>
        <input
          id="max"
          onChange={(e) =>
            setValidationForm((state) => ({
              ...state,
              max: e.target.value,
            }))
          }
          placeholder=""
          type="number"
        />
        <label htmlFor="maxLength">MaxLength</label>
        <input
          id="maxLength"
          onChange={(e) =>
            setValidationForm((state) => ({
              ...state,
              maxLength: e.target.value,
            }))
          }
          placeholder=""
          type="number"
        />
        <label htmlFor="pattern">Pattern</label>
        <input
          id="pattern"
          onChange={(e) =>
            setValidationForm((state) => ({
              ...state,
              pattern: e.target.value,
            }))
          }
          placeholder=""
        />
      </form>
    </div>
  );
};
export default ValidationForm;
