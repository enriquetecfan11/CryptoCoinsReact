import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import { CardGroup } from "react-bootstrap";


function App() {
  const [coins, setCoins] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin,tether,bitcoin-cash,ethereum,monero,Chainlink,litecoin&order=market_cap_desc&sparkline=false");

    setCoins(response.data);
  };

  return (
    <div className="App">
      <h1>CryptoCurrency </h1>
      <h2>Get a list of Crypto Currency in order of market cap descent</h2>
      <h2>Prices are in Dollars($)</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Get List
        </button>
        <br />
      </div>

      {/* Display data from API */}

      <div className="coins">
        {coins &&
          coins.map((coins, index) => {
            return (
              <div className="coin">
                <CardGroup>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" className="imagen" src={coins.image} />
                    <Card.Body>
                      <Card.Title>{coins.id} "{coins.symbol}"</Card.Title>
                      <Card.Text>Price -> {coins.current_price}$</Card.Text>
                      <Card.Text>Price Change 24 Hour -> {coins.price_change_24h}$</Card.Text>
                      <Card.Text>Best price in 24 hours {coins.high_24h}$  and Lowest price in 24 hours {coins.low_24h}$</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </div>
            );
          })}
      </div>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);