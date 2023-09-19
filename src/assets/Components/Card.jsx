import { RowCard } from "./RowCard";
import { SoloCard } from "./SoloCard";

export const Card = (props) => {
  const { card, format } = props;
  const { image, title, description, price } = card;
  return (
    <>
      {format ? (
        <RowCard
          image={image}
          title={title}
          description={description}
          price={price}
        />
      ) : (
        <SoloCard
          image={image}
          title={title}
          description={description}
          price={price}
        />
      )}
    </>
  );
};
