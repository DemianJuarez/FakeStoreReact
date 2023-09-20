import { ActionCard, ButtonCard, InfoCard } from "./DataCard";

export const RowCard = (props) => {
  const { image, title, description, price, style } = props;
  return (
    <div
      className="cardData"
      style={{
        ...style,
        width: "1200px",
        height: "250px",
        flexDirection: "row",
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
