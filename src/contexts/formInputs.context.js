import { createContext, useState } from "react";

const FormInputsContext = createContext();

const FormInputsProvider = ({ children }) => {
  const [inputs, setInputs] = useState({});
  return (
    <FormInputsContext.Provider value={{ inputs, setInputs }}>
      {children}
    </FormInputsContext.Provider>
  );
};

export { FormInputsContext, FormInputsProvider };
