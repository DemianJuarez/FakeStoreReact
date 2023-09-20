import { RowCard } from "./RowCard";
import { SoloCard } from "./SoloCard";

export const Card = (props) => {
  const { card, format } = props;
  const { image, title, description, price } = card;

  const style = {
    display: "flex",
    backgroundColor: "#9D76C1",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "8px",
    "border-radius": "2rem",
    border: "2px solid black",
  };

  return (
    <>
      {format ? (
        <RowCard
          image={image}
          title={title}
          description={description}
          price={price}
          style={style}
        />
      ) : (
        <SoloCard
          image={image}
          title={title}
          description={description}
          price={price}
          style={style}
        />
      )}
    </>
  );
};
