import { ActionCard, ButtonCard, InfoCard, PCard } from "./DataCard";

export const SoloCard = (props) => {
  const { image, title, description, price } = props;
  return (
    <div
      className="cardData"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "lightblue",
        width: "380px",
        height: "520px",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "8px",
        "border-radius": "2rem",
        border: "2px solid black",
      }}
    >
      <img
        className="cardImg"
        src={image}
        alt="cardImg"
        style={{
          width: "200px",
          height: "200px",
        }}
      />
      <InfoCard title={title} description={description} price={price} />
      <ActionCard recomend={"Recomendar"} buy={"Comprar"} />
    </div>
  );
};
