import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import Header from "./components/Header";
import axios from "axios";
import AddressList from "./components/AddressList";
import ErrorHeader from "./components/ErrorHeader";

const DataAPI = "https://62188b391a1ba20cbaa3c9ce.mockapi.io/api/users";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

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
  useEffect(() => {
    getData(DataAPI, setData);
  }, []);
  return (
    <div className="App">
      {!error ? <Header /> : <ErrorHeader />}
      {!error && <FormInput postData={postData} />}
      <AddressList addressData={data} />
    </div>
  );
}

export default App;
