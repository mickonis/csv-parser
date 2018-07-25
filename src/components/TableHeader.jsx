import React from "react";
import { map } from "lodash";

const TableHeader = (props) => {
  const { headerData } = props;

  return (
    <thead className="csv-table__head">
      <tr className="csv-table__row">
        {map(headerData, (col, i) => {
          return (
            <th key={`${i}${col}`} className="csv-table__head-cell">
              {col}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHeader;
