import "../../styles/RatingStars.scss";

function RatingStars({ rating }) {
  const totalStars = 5;
  const filledStars = parseInt(rating);

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, i) => (
        <span key={i} className={i < filledStars ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default RatingStars;
