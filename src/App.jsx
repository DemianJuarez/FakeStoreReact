import "./App.css";
import { CardContainer } from "./assets/Components/CardContainer";
import { Navbar } from "./assets/Components/Navbar";
import { getDataApi } from "./api";
import { useState } from "react";

function App() {
  const [dataApi, setDataApi] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [listSearch, setListSearch] = useState([]);

  const dataFetch = async () => {
    const data = await getDataApi();
    setDataApi(data);
    setDataFetched(true);
    console.log(data);
  };

  if (!dataFetched) {
    dataFetch();
  }

  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    getFilteredList(search);
  };

  const getFilteredList = (search) => {
    if (!search) {
      return dataApi;
    }
    console.log(dataApi.filter((product) => product.title.includes(search)));
    setListSearch(dataApi.filter((product) => product.title.includes(search)));
  };

  return (
    <>
      <Navbar handleInput={handleInput} />
      <CardContainer ProductList={listSearch} />
    </>
  );
}

export default App;
