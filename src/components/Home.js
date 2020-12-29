import React from "react";
import "./home.css";
import { Jumbotron, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="home">
        <Jumbotron className="hero" style={{ backgroundColor: "#fcc981" }}>
          <h1>Trading decisions made for you</h1>
          <p>
            Monitor your stock portfolio, generate algorithmic trading
            strategies with the click of a button. Tweak a few variables and
            test the historic returns of your strategy with custom back tests.
            Buy low, sell high or buy high and sell higher. Take the human
            emotion out of your investment decisions.
          </p>
          <p>
            <Button variant="info" size="lg">
              Sign Up
            </Button>
          </p>
        </Jumbotron>
        <div className="image">
          <img src="https://static.vecteezy.com/system/resources/previews/000/263/141/original/rocket-ship-vector.jpg"></img>
        </div>
      </div>
    </>
  );
};

export default Home;
