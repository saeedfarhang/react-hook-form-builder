import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function TestStage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log("errors", errors);

  return (
    <>
      <form
        style={{ gap: 10 }}
        className="flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p>put code here and test</p>
        <input
          {...register("jklsadf", {
            required: true,
            min: "200",
            max: "500000",
            maxLength: "3",
          })}
          type="text"
          name="jklsadf"
          placeholder="jklsadf"
        />
        <input type="submit" />
      </form>
    </>
  );
}
