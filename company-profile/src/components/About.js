import React from 'react'
import '../styles/about.css'
import img1 from '/Users/jamessutanto/CompanyProfile-/company-profile/src/img/Injection.JPG';

function About() {
  return (
    <div className='outer-div'>
        <h1>About Us</h1>
        <div className='about-div'>
            <img src={img1}/>
            <div className='about-div2'>
                <h2 className='comp-header'>PT TSSI Indonesia</h2>
                <p>Our company leads the way in cutting-edge plastic parts manufacturing. With a focus on in-house, on-demand production, we deliver unparalleled quality and customization to meet your needs.</p>
                <div className='about-div3'>
                    <div className='timeline-container'>
                        <h2 className='timeline-heading'>1994</h2>
                        <p className='timeline-text'>Founded</p>                
                    </div>
                    <div className='timeline-container'>
                        <h2 className='timeline-heading'>3</h2>
                        <p className='timeline-text'>Factories</p>                
                    </div>
                    <div className='timeline-continer'>
                        <h2 className='timeline-heading'>25</h2>
                        <p className='timeline-text'>Clients</p>                
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About