import Button from "../elements/Button";

const LayoutItem = ({ onDelete, onEdit, name, type }) => {
  return (
    <div className=" layout-item flex-space-center">
      <div className="content-holder flex-center">
        <div className="move-ic"></div>
        <h3>{name ? name : "no name"}</h3>
      </div>
      <div className="actions flex-space-center">
        <Button className="btn-low" onClick={onEdit}>
          edit
        </Button>
        <Button className="btn-low" onClick={() => onDelete(name)}>
          delete
        </Button>
      </div>
    </div>
  );
};
export default LayoutItem;
