import CustomerAddress from "./CustomerAddress";

const AddressList = ({ addressData, deleteData, postData, toggle }) => {
  return (
    <ul className="list-stacked address-list brd-rd-semi-sq">
      {addressData.map((el) => {
        return (
          <CustomerAddress
            addressItem={el}
            key={el.id}
            deleteData={deleteData}
          />
        );
      })}
    </ul>
  );
};
export default AddressList;
