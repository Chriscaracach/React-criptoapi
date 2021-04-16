import "./App.css";
import Header from "./components/header.js";
import List from "./components/list.js";
import { useState } from "react";

function App() {
  const [coins, setCoins] = useState([]); //uso del Hook para manipular State

  //Función para consumir datos de la API de Gecko
  const obtenerDatos = () => {
    //Fetch
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => {
        return res.json(); //Se convierte la respuesta en un archivo con formato JSON
      })
      .then((res) => {
        setCoins(res); //Se manda el JSON al estado
      })
      .catch((e) => console.log(e)); //Capturamos el error
  };

  return (
    <div className="App">
      <Header></Header>
      {/*Botón para consumir API y mostrar resultados*/}
      <div className="container header__containerbutton">
        <button
          className="btn btn-primary header__button"
          onClick={obtenerDatos}
        >
          Refresh
        </button>
      </div>
      <List coins={coins}></List>{" "}
      {/*Este componente muestra los resultados, se los pasamos como props*/}
    </div>
  );
}

export default App;
