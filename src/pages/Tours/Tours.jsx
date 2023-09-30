import { useState, useEffect } from "react";
import "./Tours.css";
import CommonSection from "../../shared/CommonSection/CommonSection";
import tourData from "../../assets/data/tours";
import TourCard from "./../../shared/Tour-Card/TourCard";
import SearchBar from "./../../shared/SearchBar/SearchBar";
import NewsLetter from "./../../shared/NewsLetter/NewsLetter";
import { Container, Row, Col } from "reactstrap";


function Tours() {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const scrollTop = () => {
    window.scrollTo({ top: 0});
  }
  useEffect(() => {
    scrollTop()
  }, []);

  useEffect(() => {
    const pages = Math.ceil(4 / 2); 
    setPageCount(pages);
  }, [page]);

  return (
    //Top-Banner
    <div>
      <CommonSection title={"All Tours - Choose your destination"} />
      <section>
        <Container>
          <Row>
            {/* <SearchBar /> */}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="mb-2">
            {tourData.map((tour) => (
              <Col className="mb-4" lg="3" md='6' key={tour.id}>
                {" "}
                <TourCard tour={tour} />
              </Col>
            ))}

            <Col lg="12">
              <div
                className="pagination d-flex align-items-center 
                justify-content-center mt-4 gap-3"
              >
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active_page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </div>
  );
}

export default Tours;
