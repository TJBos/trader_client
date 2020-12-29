import React from "react";
import { URL } from "../App.js";
import { Button } from "react-bootstrap";

const Strategy = () => {
  const [data, setData] = React.useState();
  const [showTable, setShowTable] = React.useState(false);

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
      <div className="table" style={{ marginTop: "30px" }}>
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
      <h3>Momentum Strategy</h3>
      <p>
        Pulls up a real time list of stocks from the SP500 ranked on a 'momentum
        score', i.e. mean of returns in short and mid term periods.
      </p>
      <Button
        variant="info"
        onClick={() => {
          setShowTable(true);
        }}
      >
        Generate momentum stocks
      </Button>
      {showTable ? buildTable() : null}
    </>
  );
};

export default Strategy;
