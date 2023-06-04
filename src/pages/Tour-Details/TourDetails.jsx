import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import "./TourDetails.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import tourData from "../../assets/data/tours";
import calculateAvgRating from "./../../Utils/avgRating";
import { FaCity, FaStar } from "react-icons/fa";
import { BiMap, BiDollarCircle } from "react-icons/bi";
import { GrGroup } from "react-icons/gr";
import { RiPinDistanceLine } from "react-icons/ri";
import jane from "../../assets/images/jane.png";
import Booking from "../../components/Booking/Booking";
import NewsLetter from "./../../shared/NewsLetter/NewsLetter";
;

function TourDetails() {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const tour = tourData.find((tour) => tour.id === id);

  const {
    title,
    desc,
    price,
    reviews,
    address,
    city,
    distance,
    maxGroupSize,
    photo,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const submitHandle = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    alert(`${reviewText}, ${tourRating}`);
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour_content">
                <img src={photo} alt="" />
                <div className="tour_info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-4">
                    <span className="tour_rating d-flex align-items-center gap-1">
                      <FaStar style={{ color: "var(--secondary-color)" }} />
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not Rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>
                    <span>
                      <BiMap />
                      {address}
                    </span>
                  </div>
                  <div className="tour_extra-details">
                    <span>
                      <FaCity style={{ color: "black" }} />
                      {city}
                    </span>
                    <span>
                      <BiDollarCircle style={{ color: "black" }} />${price}
                    </span>
                    <span>
                      <RiPinDistanceLine style={{ color: "black" }} />
                      {distance}
                    </span>
                    <span>
                      <GrGroup style={{ color: "black" }} />
                      {maxGroupSize} People
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                <div className="tour_reviews mt-4">
                  <h4>Reviews( {reviews?.length} reviews )</h4>

                  <form onSubmit={submitHandle}>
                    <div
                      className="d-flex align-items-center gap-3 mb-4 
                    rating_group"
                    >
                      <span onClick={() => setTourRating(1)}>
                        1<FaStar />
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2<FaStar />
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3<FaStar />
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4<FaStar />
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5<FaStar />
                      </span>
                    </div>

                    <div className="review_input">
                      <input
                        type="text"
                        placeholder="Share your Thoughts"
                        ref={reviewMsgRef}
                        required
                      />
                      <button className="btn primary__btn" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>

                  <ListGroup className="user_reviews">
                    {reviews?.map((review, index) => (
                      <div className="review_item" key={index}>
                        <img src={jane} alt="" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>Jane</h5>
                              <p>
                                {new Date("04-10-2023").toLocaleDateString(
                                  "en-us"
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              5
                              <FaStar
                                style={{ color: "var(--secondary-color)" }}
                              />
                            </span>
                          </div>
                          <h6>Amazing Trip. I Love this city</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>

            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      
    </>
  );
}

export default TourDetails;
