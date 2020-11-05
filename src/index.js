import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";
import Card from "react-bootstrap/CardColumns";

function App() {
  const [coins, setCoins] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin,tether,bitcoin-cash,ethereum,monero,Chainlink,litecoin&page=1&sparkline=false"
    );

    setCoins(response.data);
  };

  return (
    <div className="App">
      <h1>Crypto Currency Coins</h1>
      <h2>Get a list of Crypto Currency Coins</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Get Data
        </button>
        <br />
      </div>

      {/* Display data from API */}

      <div className="coins">
        {coins &&
          coins.map((coins, index) => {
            return (
            <ul>
              <li>
                <img alt="" className="imagen" src={coins.image}/>
              </li>
              <li>
               Coin Name -> {coins.name}
              </li>
              <li>
               Crypto Value -> {coins.current_price} $
              </li>
              <li>
                Price chage in 24 hours -> {coins.price_change_24h} $
              </li>
              <li>
                Price High in 24 hours -> {coins.high_24h} $ 
               </li>
               <li> 
                Price Low in 24 hours -> {coins.low_24h} $
              </li>

            </ul>
            );
          })}
      </div>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
