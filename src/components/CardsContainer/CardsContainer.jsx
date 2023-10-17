import "./CardsContainer.scss";
import Card from "../Card/card";

const meals = [
  {
    titel: "Salat",
    src: "/mealPictures/image1.jpeg",
    pfad: "salat.jpg",
    price: "$45/$65",
  },
  {
    titel: "Pizza",
    src: "/mealPictures/image2.jpeg",
    pfad: "pizza.jpg",
    price: "$65/$70",
  },
  {
    titel: "Frikadellen",
    src: "/mealPictures/image3.jpeg",
    pfad: "frikadellen.jpg",
    price: "$30.50",
  },
  {
    titel: "Glass",
    src: "/mealPictures/image4.jpeg",
    pfad: "glass.jpg",
    price: "$25.50",
  },
  {
    titel: "Pizza Oliven",
    src: "/mealPictures/image5.jpeg",
    pfad: "pizza2.jpg",
    price: "$25.50",
  },
  {
    titel: "Scampi",
    src: "/mealPictures/image6.jpeg",
    pfad: "scampi.jpg",
    price: "$25.50",
  },
  {
    titel: "Spaghetti",
    src: "/mealPictures/image7.jpeg",
    pfad: "spaghetti.jpg",
    price: "$25.50",
  },
  {
    titel: "Teller",
    src: "/mealPictures/image8.jpeg",
    pfad: "teller.jpg",
    price: "$25.50",
  },
];

const CardsContainer = () => {
  return (
    <div className="grid">
      {meals.map((meal, index) => (
        <Card
          key={index}
          src={meal.src}
          pfad={meal.pfad}
          title={meal.titel}
          price={meal.price}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
