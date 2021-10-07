import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "hello"
    }
  }

  changeWord = (event) => {
    this.setState({word: event.target.value});
  }

  render() {
    return (
      <section className="section">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input is-large is-fullwidth"
              id="define-input"
              placeholder="Enter a word"
              type="text"
              value={this.state.word}
              onChange={this.changeWord}
            />
          </div>
          <div className="control">
            <button className="button is-info is-large" id="define-btn">
              Define
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
