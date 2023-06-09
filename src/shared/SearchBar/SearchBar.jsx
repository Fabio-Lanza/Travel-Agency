import "./SearchBar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BiMap } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { RiGroupLine, RiMapPinTimeLine } from "react-icons/ri";
import { useRef } from "react";
import { BASE_URL } from "../../Utils/config";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandle = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location == "" || distance == "" || maxGroupSize == "") {
      return alert("All fields are required");
    }

    const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?
    city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);

    // if (!res.okay){
    //   alert("Something went wrong");
    // } 

    const result = await res.json();

    navigate(
      `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  };


  return (
    <Col lg="12">
      <div className="search_bar">
        <form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <BiMap />
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <RiMapPinTimeLine />
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance k/m"
                ref={distanceRef}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form_group form_group-last">
            <span>
              <RiGroupLine />
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <span className="search_icon" type="submit" onClick={searchHandle}>
            <GoSearch />
          </span>
        </form>
      </div>
    </Col>
  );
}

export default SearchBar;
