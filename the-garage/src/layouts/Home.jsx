import { CarrouselComponent } from './components/CarrouselComponent';
import { HowWork } from './components/HowWork';
import { ReviewsComponent } from './components/ReviewsComponent';

export const Home = () => {
  return (
    <>
      <body>
        <CarrouselComponent />
        <br />
        <HowWork />
        <br />
        <ReviewsComponent />
      </body>
    </>
  );
};
