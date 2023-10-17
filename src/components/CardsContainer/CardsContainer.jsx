import "./CardsContainer.scss";
import meals from "../../assets/db/mealspicture";
import Card from "../Card/card";

const CardsContainer = () => {
  return (
    <>
      <div className="grid">
        {meals.map((meal, index) => {
          <Card
            key={index}
            src={meal.src}
            alt={meal.pfad}
            title={meal.title}
            price={meal.price}
          ></Card>;
        })}
      </div>
    </>
  );
};

export default CardsContainer;
