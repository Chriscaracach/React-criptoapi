import React from "react";
import Coin from "./coin.js";

const List = ({ coins }) => {
  //Mapeamos el prop para renderizar los elementos de la lista
  const coinsMap = coins.map((item) => {
    return (
      <Coin
        img={item.image}
        name={item.name}
        price={item.current_price}
        porcentajecambio={item.price_change_percentage_24h}
        ath={item.ath}
        id={item.id} //Id único, lo obtenemos de la API
      ></Coin>
    );
  });
  return (
    <div className="container-fluid list__container">
      <ul className="list-group list__ul">
        <Coin
          img="https://image.flaticon.com/icons/png/512/10/10502.png"
          name="Nombre"
          price="Precio (US$)"
          porcentajecambio="%/24hs"
          ath="Máximo"
          id="0"
        ></Coin>{" "}
        {/*Éste componente se renderiza para ayudar a entender los campos de la tabla*/}
        {coinsMap}
      </ul>
    </div>
  );
};

export default List;
