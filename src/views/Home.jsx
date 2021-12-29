import { useState } from "react";
import CreateLayout from "../components/CreateLayout";
import LayoutList from "../components/LayoutList";
import LayoutsPreview from "../components/LayoutsPreview";
import { FormInputsProvider } from "../contexts/formInputs.context";
import Typography from "../elements/Typography";

const HomeView = (props) => {
  const [layoutDetail, setLayoutDetail] = useState({
    name: undefined,
    type: "text",
    options: undefined,
    haveValidation: false,
    validation: undefined,
  });
  return (
    <div className={"home-view flex-col"}>
      <div className="page-title flex-col">
        <Typography
          variant="h1"
          fontSize={"3rem"}
          color="#ffffff"
          margin={"40px 0 0 0"}
        >
          Builder
        </Typography>
        <Typography variant="p" fontSize={"1rem"} color="#ec5990">
          Build your form with code and example.
        </Typography>
      </div>

      <FormInputsProvider>
        <div className="top-holder">
          <LayoutList
            layoutDetail={layoutDetail}
            setLayoutDetail={setLayoutDetail}
          />
          <CreateLayout
            layoutDetail={layoutDetail}
            setLayoutDetail={setLayoutDetail}
          />
          <LayoutsPreview />
        </div>
      </FormInputsProvider>
    </div>
  );
};
export default HomeView;
