/* eslint-disable react/prop-types */

import "./Card.scss";

// eslint-disable-next-line react/prop-types
// const Card = ({ src, alt, title, price }) => {

// Old version: src={src} alt={alt}....

// -version Props
const Card = (props) => {
  return (
    <>
      <div className="flex-colum">
        <img src={props.mealObject.src} alt={props.mealObject.pfad} />
        <h3 className="card-title">{props.mealObject.titel}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
          praesentium similique error laboriosam rerum, dolorem vel nam
          dignissimos voluptatibus et.
        </p>
        <h4>Aenean</h4>
        <h3 className="card-price">{props.mealObject.price}</h3>
      </div>
    </>
  );
};

export default Card;
