import { useEffect, useMemo, useState } from "react";

const ValidationForm = ({ layoutDetail, setLayoutDetail }) => {
  const [validationForm, setValidationForm] = useState({
    ...layoutDetail.validation,
  });
  useMemo(() => {
    setLayoutDetail((state) => ({
      ...state,
      validation: {
        ...validationForm,
      },
    }));
  }, [validationForm]);

  useEffect(() => {
    console.log("layoutDetail", layoutDetail);
  }, [layoutDetail]);

  return (
    <div className="validation-form-holder">
      <form onSubmit={(e) => e.preventDefault()}>
        <span className="check-holder flex-center">
          <input
            id="required-in"
            type="checkbox"
            checked={validationForm.required}
            onChange={(e) =>
              setValidationForm((state) => ({
                ...state,
                required: e.target.checked,
              }))
            }
          />
          <label htmlFor={"required-in"}>required?</label>
        </span>
        <label htmlFor={"min"}>Min</label>
        <input
          value={validationForm.min}
          id="min"
          onChange={(e) =>
            setValidationForm((state) => ({
              ...state,
              min: e.target.value,
            }))
          }
          type="number"
        />
        <label htmlFor="max">Max</label>
        <input
          value={validationForm.max}
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
          value={validationForm.maxLength}
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
          value={validationForm.pattern}
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
