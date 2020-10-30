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
    quote: quotesMT[0].quote
  };

  selectMark = () => {
    this.setState({ author: "Mark Twain" });
    this.setState({ count: 1 });
    this.setState({ quote: quotesMT[this.state.count].quote});
  };

  selectBuddha = () => {
    this.setState({ author: "Buddha" });
    this.setState({ count: 0 });
    // this.setState({ source: quotesB });
    this.setState({ quote: quotesB[this.state.count].quote });
  };

  selectAL = () => {
    this.setState({ author: "Abraham Lincoln" });
    this.setState({ count: 0 });
    // this.setState({ source: quotesAL });
    this.setState({ quote: quotesAL[this.state.count].quote });
  };

  nextQuote = () => {

    const { count, author } = this.state;

    switch(author) {
      case "Mark Twain":
        this.setState({ quote: quotesMT[count].quote });
        break;
      case "Buddha":
        this.setState({ quote: quotesB[count].quote });
        break;
      default:
        this.setState({ quote: quotesAL[count].quote });
    }
  }
  handleChange = () => {
    console.log(this.state.count);
    if (this.state.count === 2) {
      this.setState({ count: 0 });
      this.nextQuote();
    } else {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
      this.nextQuote();
    }
    // console.log(this.state.count);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>
            <button type="button" class="btn btn-success btn-lg mr-4" onClick={this.selectMark}>Mark Twain</button>
            <button type="button" class="btn btn-success btn-lg mr-4" onClick={this.selectBuddha}>Buddha</button>
            <button type="button" class="btn btn-success btn-lg mr-4" onClick={this.selectAL}>Abraham Lincoln</button>
          </span>
          <br></br>
          <Quotes 
            author={this.state.author} 
            quote={this.state.quote}
            changeQuote={this.handleChange}
          />
        </header>
      </div>
    );
  }
}

export default App;
