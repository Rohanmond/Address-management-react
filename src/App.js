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
      setData(response.data.reverse());
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };
  const postData = async (newData) => {
    try {
      const response = await axios.post(DataAPI, newData);
      if (response.status === 201 || response.status === 200) {
        setData([response.data].concat(data));
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
      setError(true);
      console.error(error);
    }
  };
  const updateData = async (el) => {
    try {
      const response = await axios.put(`${DataAPI}/${el.id}`, el);
      if (response.status === 201 || response.status === 200) {
        setData(data.map((it) => (it.id === el.id ? el : it)));
      }
    } catch (error) {
      setError(true);
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
        <FormInput dataOperations={{ postData }} toggle={toggleShowInputForm} />
      )}
      {data.length === 0 ? (
        <h3>No Address to show</h3>
      ) : (
        <AddressList
          addressData={data}
          dataOperations={{ deleteData, updateData }}
        />
      )}
    </div>
  );
}

export default App;
