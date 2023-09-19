import { ActionCard, ButtonCard, InfoCard } from "./DataCard";

export const RowCard = (props) => {
  const { image, title, description, price } = props;
  return (
    <div
      className="cardData"
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "lightblue",
        width: "1200px",
        height: "250px",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "8px",
        borderRadius: "2rem",
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
