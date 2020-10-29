import React from "react";
import "./style.css";
import quotes from "./quotes.json";

class Quotes extends React.Component {

  state = {
    count: 0
  };

  handleIncrement = () => {
    console.log(this.state.count);
    if (this.state.count === 2) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Quotes R'us!</h1>
          <p> <strong>{quotes[this.state.count].author}</strong></p>
          <p> {quotes[this.state.count].quote}</p>
          <p>
            <button className="btn btn-secondary btn-lg" onClick={this.handleIncrement}>Change Quote</button>
          </p>
        </div>
      </div>
    )
  }
}

export default Quotes;