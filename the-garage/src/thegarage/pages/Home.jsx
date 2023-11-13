/* eslint-disable react/prop-types */
import { useEffect } from 'react';

import {
  AboutUs,
  CarrouselComponent,
  HowWork,
  ReviewsComponent,
} from '../components';
import { OurCompanys } from '../components/home/OurCompanys';

export const Home = ({ handleSection }) => {
  useEffect(() => {
    if (handleSection !== 'home') {
      const element = document.getElementsByName(handleSection)[0];
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [handleSection]);

  return (
    <>
      <div>
        <CarrouselComponent />
        <div name="steps" className="m-5" />
        <HowWork />
        <div name="about" className="m-5" />
        <AboutUs />
        <div name="companies" className="m-5" />
        <OurCompanys />
        <div name="reviews" className="m-5" />
        <ReviewsComponent />
      </div>
    </>
  );
};
