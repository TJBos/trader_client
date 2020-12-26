import React from "react";
import { URL } from "../App.js";

const Strategy = () => {
  const [data, setData] = React.useState();

  const getMomentum = () => {
    fetch(URL + "momentum/preload")
      .then((response) => response.json())
      .then((result) => setData(result));
  };
  React.useEffect(() => {
    getMomentum();
  }, []);

  const buildTable = () => {
    const keys = Object.keys(data);
    keys.splice(2, 1);
    const values = Object.values(data);
    values.splice(2, 1);
    return (
      <div className="table">
        <table>
          <tr>
            {keys.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
          {values[0].map((item, index) => (
            <tr>
              {values.map((el) => (
                <td>{el[index]}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    );
  };

  return (
    <>
      <h1>Strategy</h1>
      {data && buildTable()}
    </>
  );
};

export default Strategy;
