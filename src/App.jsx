import "./App.css";
import { CardContainer } from "./assets/Components/CardContainer";
import { Navbar } from "./assets/Components/Navbar";
import { getDataApi } from "./api";
import { useState } from "react";

function App() {
  const [dataApi, setDataApi] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [search, setSearch] = useState("");

  const dataFetch = async () => {
    const data = await getDataApi();
    setDataApi(data);
    setDataFetched(true);
    console.log(data);
  };

  if (!dataFetched) {
    dataFetch();
  }

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const returnProducts = () => {
    if (search.length > 0) {
      const searchMin = search.toLowerCase();
      const filteredData = dataApi.filter((product) => {
        const productTitleMin = product.title.toLowerCase();
        return productTitleMin.includes(searchMin);
      });

      return filteredData;
    } else {
      return dataApi;
    }
  };

  return (
    <>
      <Navbar handleInput={handleInput} />
      <CardContainer dataApi={returnProducts()} />
    </>
  );
}
export default App;
