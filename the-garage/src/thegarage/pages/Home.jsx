import {
  AboutUs,
  CarrouselComponent,
  HowWork,
  ReviewsComponent,
} from '../components';
import { OurCompanys } from '../components/home/OurCompanys';

export const Home = () => {
  return (
    <>
      <div>
        <CarrouselComponent />
        <div className="m-5" />
        <HowWork />
        <div className="m-5 align-items-center" />
        <AboutUs />
        <div className="m-5" />
        <OurCompanys />
        <div className="m-5" />
        <ReviewsComponent />
      </div>
    </>
  );
};
