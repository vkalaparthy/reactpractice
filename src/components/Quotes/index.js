import "./style.css";

function Quotes(props) {

  // state = {
  //   count: 0
  // };

  // handleIncrement = () => {
  //   console.log(this.state.count);
  //   if (this.state.count === 2) {
  //     this.setState({ count: 0 });
  //   } else {
  //     this.setState({ count: this.state.count + 1 });
  //   }
  // };
  
  // if (props.author === "Mark Twain") {
  //   quotes = quotesMT;
  // }

  // render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Quotes for us!</h1>
          {props.author ? (
            <>
              <p> <strong>{props.author}</strong></p>
              <h5> {props.quote}</h5>
              <p>
                <button className="btn btn-secondary btn-lg" onClick={() => props.changeQuote()}>Change Quote</button>
              </p>
            </>
          ) : (
            <h5>Select any button to continue!</h5>
          )} 
        </div>
      </div>
    )
  // }
}

export default Quotes;