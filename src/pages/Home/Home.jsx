import "./Home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img01.jpg";
import heroImg02 from "../../assets/images/hero-img02.jpg";
import heroVideo from "../../assets/images/hero-video.mp4";
import worldImg from "../../assets/images/world.png";
import experience from "../../assets/images/experienceTour.png";
import Subtitle from "../../shared/Subtitle/Subtitle";
import SearchBar from "../../shared/SearchBar/SearchBar";
import ServiceList from "../../services/ServiceList";
import FeaturedTourList from "../../components/Featured-Tour/FeaturedTourList";
import ImagesGallery from "../../components/Image-gallery/ImagesGallery";
import Testimonial from "../../components/Testimonial/Testimonial";
import NewsLetter from "../../shared/NewsLetter/NewsLetter";

function Home() {
  return (
    <>
      {/* Intro --- */}
      <section className="intro">
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling always brings you unforgettable
                  <span> memories</span>
                </h1>
                <p>
                  Discover new destinations and travel styles through our
                  agency.
                </p>
              </div>
            </Col>

            <Col lg="3">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            {/* <SearchBar /> */}
          </Row>
        </Container>
      </section>

      {/* Services --- */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services_subtitle">What we serve</h5>
              <h2 className="services_title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* Feature tour--- */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured_tour-title">Our featured tour</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* Experience--- */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  We are the world's most awarded & loved <br />
                  travel company
                </h2>
                <p>
                  We offer better travel experiences and value for travelers.
                </p>
              </div>
              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter_box">
                  <span>3k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter_box">
                  <span>10</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience_img">
                <img src={experience} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery --- */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery_title">Our Tour Gallery</h2>
            </Col>
            <Col lg="12">
              <ImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial --- */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Customer Love"} />
              <h2 className="testimonial_title">
                What customers say about us !
              </h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      <NewsLetter />
    </>
  );
}

export default Home;
