import "./TourCard.css";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { BiMap } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import calculateAvgRating from "../../Utils/avgRating";

function TourCard({ tour }) {
  const { id, title, photo, price, city, featured, reviews } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour_card">
      <Card>
        <div className="tour_img">
          <img src={photo} alt="" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div
            className="card_top d-flex align-items-center
         justify-content-between"
          >
            <span className="tour_location d-flex align-items-center gap-1">
              <BiMap style={{ color: "var(--secondary-color)" }} />
              {city}
            </span>
            <span className="tour_rating d-flex align-items-center gap-1">
              <FaStar style={{ color: "var(--secondary-color)" }} />
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not Rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>

          <h5 className="tour_title">
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>

          <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price} <span> /per person /</span>
            </h5>
            <button className="btn booking_btn">
              <Link to={`/tours/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default TourCard;
