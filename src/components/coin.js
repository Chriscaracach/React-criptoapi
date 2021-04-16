import React from "react";

//Componente que recibe todos los props desde el mapeo del objeto JSON sacado de la API
const Coin = ({ img, name, price, porcentajecambio, ath }) => {
  return (
    <li className="list-group-item coin__container">
      <div className="container">
        <div className="row coin__row">
          <div className="col-1">
            <img src={img} alt="" width="30px" height="30px" />
          </div>
          <div className="col-5">{name}</div>
          <div className="col-2">{price}</div>
          <div className="col-2">{porcentajecambio}</div>
          <div className="col-2">{ath}</div>
        </div>
      </div>
      k
    </li>
  );
};

export default Coin;
