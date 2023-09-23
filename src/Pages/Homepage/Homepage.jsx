import React from 'react'
import './Homepage.css'
import Header from './../../Components/Header/Header';

function Homepage() {
  return (
    <div className='homepage-container'>
            <Header />
        <div className='banner-container'>
            <h1>Your dream home begins here</h1>
        </div>
        <div className='hp-services-container'>
            <div className='hp-interior-text'>
            <h1>Interior Work</h1>
            <p>Some random, well not random, but random text about how she can do interior 
                work to a very high degree, this will give an overview and almost sell 
                the service so that users will click on this to see more, and HOPEFULLY 
                book a consultation.
            </p>
            </div>
            <div className='hp-interior-image'>
            <h1>2</h1>
            </div>
            <div className='hp-exterior-text'>
            <h1>Exterior Work</h1>
            <p>Some random, well not random, but random text about how she can do exterior 
                work to a very high degree, this will give an overview and almost sell 
                the service so that users will click on this to see more, and HOPEFULLY 
                book a consultation.
            </p>
            </div>
            <div className='hp-exterior-image'>
            <h1>4</h1>
            </div>

        </div>
        <div className='hp-reviews-container'>

        </div>
    </div>
  )
}

export default Homepage