import { List } from "./style";

const Cards = ({ name, img, description }) => {
  return (
    <List>
      <img src={img} alt={name} />
      <div>
        <h1>
          <strong>{name}</strong>
        </h1>
        <span>{description}</span>
      </div>
    </List>
  );
};
export default Cards;
