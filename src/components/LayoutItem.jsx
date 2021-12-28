import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
`;
const LayoutItem = ({ onDelete, onEdit, name, type }) => {
  return (
    <Container>
      <p
        onClick={() => {
          onEdit();
        }}
      >
        {name ? name : "no name"}
        {"\t"} || {type + "\t"} ||{" "}
      </p>
      <p onClick={() => onDelete(name)}>{"\t\t X \t\t"}</p>
    </Container>
  );
};
export default LayoutItem;
