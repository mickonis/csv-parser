import React from "react";
import { map } from "lodash";

const TableBody = (props) => {
  const { bodyData } = props;

  return (
    <tbody className="csv-table__body">
      {map(bodyData, (bodyData, i) => (
        <tr className="csv-table__row" key={i}>
          {map(bodyData, (column, i) => (
            <td className="csv-table__cell" key={`${i}${column}`}>
              {column}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
