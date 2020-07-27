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


    <div className="home_row">
    <Product 
      id="12321341"
      title="Allen Sports 4-Bike Hitch Racks for 2 in. Hitch for Jeep Grand Cherokee"
      price={119.00}
      rating={5}
      image="https://m.media-amazon.com/images/I/71U36hY3LDL._AC_UY436_FMwebp_QL65_.jpg"
    />

    <Product 
      id="12321341"
      title="#1 New York Times Bestseller – Soon to be a Major Motion Picture starring Amy Adams, Julianne Moore, and Gary Oldman"
      price={7.99}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/51kYrhkUmJL._SX330_BO1,204,203,200_.jpg"
    />    
    </div>

    <div className="home_row">
    <Product 
      id="12321341"
      title='QSC K12.2 Active 12" Powered 2000 Watt Loudspeaker'
      price={799.99}
      rating={5}
      image="https://m.media-amazon.com/images/I/918HaO2vwkL._AC_UL640_FMwebp_QL65_.jpg"
    /> 
    <Product 
      id="12321341"
      title="Sony X900H 55 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model"
      price={998.00}
      rating={4}
      image="https://m.media-amazon.com/images/I/612U-Yeox0L._AC_UY436_FMwebp_QL65_.jpg"
    /> 
    <Product 
      id="12321341"
      title="GoPro HERO8 Black - Waterproof Action Camera with Touch Screen 4K Ultra HD Video 12MP Photos 1080p Live Streaming Stabilization"
      price={299.00}
      rating={5}
      image="https://m.media-amazon.com/images/I/71UAtd5yS5L._AC_UY436_FMwebp_QL65_.jpg"
    /> 

    </div>

    <div className="home_row">
    <Product 
      id="12321341"
      title="Mountain Road Bike, 21 Speed 700c Sport Aluminum Road Bike, Made in America"
      price={179.99}
      rating={3}
      image="https://m.media-amazon.com/images/I/61VhELvqLqL._AC_UY436_FMwebp_QL65_.jpg"
    /> 
    </div>

    {/* Product */}
    </div>
  );
}

export default Home;