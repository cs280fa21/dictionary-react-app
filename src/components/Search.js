import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "hello",
    };
  }

  changeWord = (event) => {
    this.setState({ word: event.target.value });
  };

  fetchDefinitions = async (event) => {
    event.preventDefault();
    const dictionaryAPI = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
    const wordToDefine = this.state.word;
    try {
      const response = await axios.get(`${dictionaryAPI}${wordToDefine}`);
      const data = response.data;
      console.log(data[0]);
      this.props.updateUI(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

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
            <button
              className="button is-info is-large"
              id="define-btn"
              onClick={this.fetchDefinitions}
            >
              Define
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Search;

Search.propTypes = {
  updateUI: PropTypes.func.isRequired
};