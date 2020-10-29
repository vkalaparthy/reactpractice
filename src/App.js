import React from 'react';
import Quotes from './components/Quotes'
import './App.css';
import quotesMT from "./quotesMT.json";
import quotesB from "./quotesB.json";
import quotesAL from "./quotesAL.json";

class App extends React.Component {

  state = {
    author: "Mark Twain",
    count: 0,
    source: quotesMT[0].quote
  };

  sendMark = () => {
    this.setState({ author: "Mark Twain" });
    this.setState({ count: 0 });
    this.setState({ source: quotesMT[this.state.count].quote });
  };

  sendBuddha = () => {
    this.setState({ author: "Buddha" });
    this.setState({ count: 0 });
    this.setState({ source: quotesB[this.state.count].quote });
  };

  sendAL = () => {
    this.setState({ author: "Abraham Lincoln" });
    this.setState({ count: 0 });
    this.setState({ source: quotesAL[this.state.count].quote });
  };

  handleChange = () => {
    console.log(this.state.count);
    if (this.state.count === 2) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
    if ( this.state.author === "Mark Twain" ) {
      this.setState({ source: quotesMT[this.state.count].quote });
    } else if ( this.state.author === "Buddha" ){
      this.setState({ source: quotesB[this.state.count].quote });
    } else {
      this.setState({ source: quotesAL[this.state.count].quote });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>
            <button type="button" class="btn btn-success btn-lg mr-4" onClick={this.sendMark}>Mark Twain</button>
            <button type="button" class="btn btn-success btn-lg mr-4" onClick={this.sendBuddha}>Buddha</button>
            <button type="button" class="btn btn-success btn-lg mr-4" onClick={this.sendAL}>Abraham Lincoln</button>
          </span>
          <br></br>
          <Quotes 
            author={this.state.author} 
            quote={this.state.source}
            changeQuote={this.handleChange}
          />
        </header>
      </div>
    );
  }
}

export default App;
