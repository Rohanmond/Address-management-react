import CustomerAddress from "./CustomerAddress";

const AddressList = ({ addressData, deleteData, updateData }) => {
  return (
    <ul className="list-stacked address-list brd-rd-semi-sq">
      {addressData.map((el) => {
        return (
          <CustomerAddress
            addressItem={el}
            key={el.id}
            deleteData={deleteData}
            updateData={updateData}
          />
        );
      })}
    </ul>
  );
};
export default AddressList;
