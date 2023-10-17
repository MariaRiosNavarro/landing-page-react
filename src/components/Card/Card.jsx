import "./Card.scss";

const Card = ({ src, alt, title, price }) => {
  return (
    <>
      <div className="flex-colum">
        <img src={src} alt={alt} />
        <h3 className="card-title">{title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
          praesentium similique error laboriosam rerum, dolorem vel nam
          dignissimos voluptatibus et.
        </p>
        <h4>Aenean</h4>
        <h3 className="card-price">{price}</h3>
      </div>
    </>
  );
};

export default Card;
