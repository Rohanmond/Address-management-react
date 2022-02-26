import CustomerAddress from "./CustomerAddress";

const AddressList = ({ addressData }) => {
  return (
    <ul className="list-stacked address-list brd-rd-semi-sq">
      {addressData.map((el) => {
        return <CustomerAddress addressItem={el} key={el.id} />;
      })}
    </ul>
  );
};
export default AddressList;
