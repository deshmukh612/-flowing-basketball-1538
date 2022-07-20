import React from 'react'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slider1G = () => {
    const images = [
        "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_62c7158f31f30",
        "https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34c119a29f",
        
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    {/* <span>Slide 1</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    {/* <span>Slide 2</span> */}
                </div>
            </div>
           
        </Slide>
    );
};


export default Slider1G
