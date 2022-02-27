const InputFormController = ({ toggle }) => {
  return (
    <div className="controller-container" onClick={toggle}>
      <button className="btn btn-primary background-primary brd-rd-semi-sq">
        <i className="fas fa-plus"></i>
      </button>
      <p className="text-lg">Add new address</p>
    </div>
  );
};
export default InputFormController;
