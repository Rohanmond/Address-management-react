import CustomerAddress from "./CustomerAddress";

const AddressList = ({ addressData, dataOperations }) => {
  return (
    <ul className="list-stacked address-list brd-rd-semi-sq">
      {addressData.map((el) => {
        return (
          <CustomerAddress
            addressItem={el}
            key={el.id}
            dataOperations={dataOperations}
          />
        );
      })}
    </ul>
  );
};
export default AddressList;
