/* eslint-disable react/prop-types */
import "./Card.scss";

// eslint-disable-next-line react/prop-types
// const Card = ({ src, alt, title, price }) => {

// -version Props
const Card = (props) => {
  return (
    <>
      <div className="flex-colum">
        <img src={props.src} alt={props.alt} />
        <h3 className="card-title">{props.title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
          praesentium similique error laboriosam rerum, dolorem vel nam
          dignissimos voluptatibus et.
        </p>
        <h4>Aenean</h4>
        <h3 className="card-price">{props.price}</h3>
      </div>
    </>
  );
};

export default Card;
