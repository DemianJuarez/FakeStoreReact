export const ButtonCard = (props) => {
  const { content } = props;
  return <button className="buttonCard">{content}</button>;
};

export const ActionCard = (props) => {
  const { recomend, buy } = props;
  return (
    <div className="cardAction" style={{ display: "flex", gap: "10px" }}>
      <ButtonCard content={recomend} />
      <ButtonCard content={buy} />
    </div>
  );
};

export const PCard = (props) => {
  const { content } = props;
  return <p className="pCard">{content}</p>;
};

export const InfoCard = (props) => {
  const { title, description, price } = props;
  return (
    <div className="cardInfo">
      <PCard content={title} />
      <PCard content={description} />
      <PCard content={price} />
    </div>
  );
};
