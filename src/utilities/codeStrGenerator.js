const codeStrGenerator = (elms) => {
  const boilerPlate = `
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            ${
              elms.length ? elms.map((elm) => `\t${elm} \n\t`) : ""
            }                       
        </form>
      );
    }
`;
  return boilerPlate;
};

export { codeStrGenerator };
