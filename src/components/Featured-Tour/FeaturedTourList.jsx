import React from 'react'
import TourCard from '../../shared/Tour-Card/TourCard'
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'

function FeaturedTourList() {
 
  return (
    <>
    {tourData?.map((tour)=> (
        <Col lg='3' md='4' sm='6' className='mb-4' key={tour._id}>
            <TourCard tour={tour} key={tour}/>
        </Col>
    ))
    }
    </>
  )
}

export default FeaturedTourList