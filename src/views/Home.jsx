import { useState } from "react";
import styled from "styled-components";
import CreateLayout from "../components/CreateLayout";
import LayoutList from "../components/LayoutList";
import LayoutsPreview from "../components/LayoutsPreview";
import { FormInputsProvider } from "../contexts/formInputs.context";

const Container = styled.div`
  min-height: 100vh;
  .top-holder {
    margin: 30px 0;
  }
`;
const HomeView = (props) => {
  const [layoutDetail, setLayoutDetail] = useState({
    name: undefined,
    type: "text",
    options: undefined,
    haveValidation: false,
    validation: undefined,
  });
  return (
    <Container className={"flex-col"}>
      <FormInputsProvider>
        <div className="flex-space top-holder">
          <CreateLayout
            layoutDetail={layoutDetail}
            setLayoutDetail={setLayoutDetail}
          />
          <LayoutList
            layoutDetail={layoutDetail}
            setLayoutDetail={setLayoutDetail}
          />
        </div>
        <LayoutsPreview />
      </FormInputsProvider>
    </Container>
  );
};
export default HomeView;
