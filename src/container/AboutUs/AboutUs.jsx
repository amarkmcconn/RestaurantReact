import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.C} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">With over 20-plus years in the fine dining industry, We emphasize on fresh, local food prepared in unique ways and served in an atmosphere that is unlike any other restaurant in the world. </p>
        <button type="button" className="custom__button">More Info</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The history of fine dining begins in France when, at the end of the 18th century, the French Revolution led to many displaced chefs looking for work after losing their positions in aristocratic households. </p>
        <button type="button" className="custom__button"><a href="https://kevinsrestaurant.us/fine-dining/the-french-revolution-and-the-birth-of-fine-dining/">More History</a></button>
      </div>
    </div>
  </div>
);

export default AboutUs;
