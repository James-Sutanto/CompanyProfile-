import React from 'react'
import '../styles/client.css'
import img1 from '/Users/jamessutanto/CompanyProfile-/company-profile/src/img/p1.JPG'
import img2 from '/Users/jamessutanto/CompanyProfile-/company-profile/src/img/Sharp_TV.JPG'
import img3 from '/Users/jamessutanto/CompanyProfile-/company-profile/src/img/pxg930.JPG'
import img4 from '/Users/jamessutanto/CompanyProfile-/company-profile/src/img/img4.JPG'

function Products() {
  return (
    <div className='outer-div3'>
      <h1>Products</h1>
      <div className='service-list'>
        <div className='service-card2'>
          <img src={img1} alt="Product 1" />
          <div className='card-text2'>
            <h3>Product 1</h3>
          </div>
        </div>
        <div className='service-card2'>
          <img src={img2} alt="Sharp Tv" />
          <div className='card-text2'>
            <h3>Sharp Tv</h3>
          </div>
        </div>
        <div className='service-card2'>
          <img src={img3} alt="Printer" />
          <div className='card-text2'>
            <h3>Printer</h3>
          </div>
        </div>
        <div className='service-card2'>
          <img src={img4} alt="Olly Waver" />
          <div className='card-text2'>
            <h3>Olly Waver</h3>
          </div>
        </div>
      </div>
      <div className='clients-para'>
        <p>Our team is made up of experienced professionals who are passionate about technology and dedicated to helping businesses succeed. With expertise in web development, app development, software development, and digital marketing, our team has the skills and knowledge to deliver exceptional results.</p>
      </div>
     
    </div>
  )
}

export default Products
