import React from 'react';
import './Home.css';
import Product from './Product.js';


function Home() {
  return (
    <div className="home">
      <img
        className="home_page" 
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
   
    <Product 
      id="12321341"
      title="The Lean Startup: How constant Innovation Creates Radically Successful Businesses"
      price={11.96}
      rating={5}
      image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
    />
    {/* Product */}
    </div>
  );
}

export default Home;