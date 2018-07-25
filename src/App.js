import React, { Component } from 'react';
import CsvParser from './components/CsvParser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //deafult data for example
      csv: 
        `Model, Year, Launch price
        PlayStation, 1994, 299
        PlayStation 2, 2000, 299
        PlayStation 3, 2006, 599
        PlayStation 4, 2013, 399`,
    };
  }

  handleCsvChange = (event) => {
    this.setState({ csv: event.target.value });
  };

  render() {
    return (
      <div className="app">
        <textarea
          className="textarea"
          value={this.state.csv}
          onChange={this.handleCsvChange}
        />
        <CsvParser
          data={this.state.csv}
          delimiter=","
          withHeader={true}
        />
      </div>
    );
  }
}

export default App;
