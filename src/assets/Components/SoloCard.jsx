import { ActionCard, ButtonCard, InfoCard, PCard } from "./DataCard";

export const SoloCard = (props) => {
  const { image, title, description, price, style } = props;
  return (
    <div
      className="cardData"
      style={{
        ...style,
        width: "380px",
        height: "520px",
        flexDirection: "column",
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
