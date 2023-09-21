import { useState } from "react";
import { Card } from "./Card";

export const CardContainer = (props) => {
  const { dataApi } = props;
  const [format, setFormat] = useState(false);

  const handlerFormat = () => {
    setFormat(!format);
  };

  return (
    <>
      <div
        className="divButton"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px",
          paddingTop: "10px",
          backgroundColor: "#713ABE",
        }}
      >
        <button
          className="buttonFormat"
          style={{
            width: "200px",
            height: "50px",
            backgroundColor: "#9D76C1",
          }}
          onClick={handlerFormat}
        >
          Change format
        </button>
      </div>
      <div
        className="cardContainer"
        style={{
          backgroundColor: "#713ABE",
          flexDirection: "row",
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignContent: "flex-start",
          gap: "10px",
          flexWrap: "wrap",
          padding: "30px",
        }}
      >
        {dataApi && dataApi.length > 0 ? (
          dataApi.map((card) => (
            <div className="card" key={card.key}>
              <Card format={format} card={card} />
            </div>
          ))
        ) : (
          <div
            className="divText"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 className="textNotFound">No se encontraron resultados :C</h2>
          </div>
        )}
      </div>
    </>
  );
};
