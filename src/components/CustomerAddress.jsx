const CustomerAddress = ({ addressItem, deleteData }) => {
  const { id, name, mobile, pincode, state, city, address, alternatemobile } =
    addressItem;
  return (
    <li className="list-stacked-item">
      <div className="list-stacked-heading text-lg font-wt-bold">{name}</div>
      <div className="ph-no-section font-wt-semibold">
        <p>{mobile}</p>
        <p>{alternatemobile}</p>
      </div>
      <div className="address-section">
        <p className="address">{address}</p>
        <p className="zip-code font-wt-semibold">{pincode}</p>
      </div>
      <div className="city-state-section">
        <p className="city">{city}</p>
        <p className="state">{state}</p>
      </div>
      <div className="address-footer">
        <button className="btn btn-primary background-success brd-rd-semi-sq">
          Edit
        </button>
        <button
          onClick={() => deleteData(id)}
          className="btn btn-primary background-danger brd-rd-semi-sq"
        >
          Delete
        </button>
      </div>
    </li>
  );
};
export default CustomerAddress;
