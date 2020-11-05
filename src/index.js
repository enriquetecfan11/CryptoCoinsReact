import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

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
          get Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="coins">
        {coins &&
          coins.map((coins, index) => {
            return (
              <div className="book" key={index}>
                <h2>{coins.name}</h2>
                <image alt="logo" src={coins.image} />

                <div className="details">
                  <image alt="logo" src={coins.image} />
                  <p>🤑 Current Price: {coins.current_price} $</p>
                  <p>💰 Price High 24 Hours: {coins.high_24h} $</p>
                  <p>💰 Price Low 24 Hours: {coins.low_24h} $</p>
                </div>
              </div>
            );
          })}
      </div>

      <ScotchInfoBar seriesNumber="7" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
