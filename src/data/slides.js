// src/data/heroSlides.js

import slide1 from '../assets/images/farmimage.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

import img1 from '../assets/images/secondslide1.jpg';
import img2 from '../assets/images/secondslide2.jpg';
import img3 from '../assets/images/secondslide3.jpg';

const section1 = [
  {
    image: slide1,
    title: 'From Our Farms\nTo Your Hands',
    sub: 'Welcome To TenTwenty Farms',
  },
  {
    image: slide2,
    title: 'Delivering Quality\nFarm Produce',
    sub: 'Fresh Harvest Everyday',
  },
  {
    image: slide3,
    title: 'Healthy Living\nFrom the Ground Up',
    sub: 'Trusted by Families',
  },
];

const section2 = [
  { image: img1, client: 'Client 1', location: 'Dubai, United Arab Emirates' },
  { image: img2, client: 'Client 2', location: 'Nairobi, Kenya' },
  { image: img3, client: 'Client 3', location: 'Amsterdam 1, Netherlands' },
];

export {section1, section2};
