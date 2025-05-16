import "../../styles/RatingStars.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function RatingStars({ rating }) {
  const totalStars = 5;
  const filledStars = Math.round(Number(rating));

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`star ${i < filledStars ? "filled" : ""}`}
        />
      ))}
    </div>
  );
}

export default RatingStars;
