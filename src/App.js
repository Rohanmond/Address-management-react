import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import FormInput from "./components/InputForm";
import Header from "./components/Header";
import axios from "axios";
import AddressList from "./components/AddressList";
import ErrorHeader from "./components/ErrorHeader";
import InputFormController from "./components/InputFormController";

const DataAPI = "https://62188b391a1ba20cbaa3c9ce.mockapi.io/api/users";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(DataAPI);
      setData(response.data);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };
  const postData = async (newData) => {
    try {
      const response = await axios.post(DataAPI, newData);
      if (response.status === 201 || response.status === 200) {
        setData(data.concat(response.data));
      }
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };
  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`${DataAPI}/${id}`);
      if (response.status === 201 || response.status === 200) {
        setData(data.filter((el) => el.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleShowInputForm = () => {
    setShowForm(() => !showForm);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {!error ? <Header /> : <ErrorHeader />}
      {!showForm && <InputFormController toggle={toggleShowInputForm} />}
      {!error && showForm && (
        <FormInput postData={postData} toggle={toggleShowInputForm} />
      )}
      <AddressList
        addressData={data}
        deleteData={deleteData}
        postData={postData}
        toggle={toggleShowInputForm}
      />
    </div>
  );
}

export default App;
