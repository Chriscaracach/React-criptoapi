import React from "react";

//Componente que recibe todos los props desde el mapeo del objeto JSON sacado de la API
const Coin = ({ img, name, price, porcentajecambio, ath }) => {
  return (
    <li className="list-group-item coin__container">
      <div className="container">
        <div className="row coin__row">
          <div className="col-md-1">
            <img src={img} alt="" width="30px" height="30px" />
          </div>
          <div className="col-md-5">
            <p>{name}</p>
          </div>
          <div className="col-md-2">
            <p>{price}</p>
          </div>
          <div className="col-md-2">
            <p>{porcentajecambio}</p>
          </div>
          <div className="col-md-2">
            <p>{ath}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Coin;
