import React from "react";
import { map } from "lodash";

import TableHeader from "./TableHeader"
import TableBody from "./TableBody"

class CsvParser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  csvParser = (csvText, csvColumnDelimiter = '\t') => {
    const rows = csvText.split('\n');
    const bodyData = map(rows, (row) => {
        return row.split(csvColumnDelimiter);
    });
    
    return bodyData;
  }

  render() {
    const bodyData = this.csvParser(
      this.props.data.trim(),
      this.props.delimiter
    );

    let headerData = undefined;
    if (this.props.withHeader) {
      headerData = bodyData.splice(0, 1)[0];
    }

    return (
      <table className="csv-table">
        {headerData &&
          <TableHeader headerData={headerData}/>
        }
        <TableBody bodyData={bodyData}/>
      </table>
    );
  }
}

export default CsvParser;
