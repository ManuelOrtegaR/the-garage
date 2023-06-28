import { Carousel } from 'react-bootstrap';
import { CarouselStyled, SubTitleStyled } from './ComponentsStyles';
import { ReviewCard } from './ReviewCard';

export const ReviewsComponent = () => {
  return (
    <>
      <div className="bg-main-color pt-4">
        <SubTitleStyled color="white">Comentarios</SubTitleStyled>
        <CarouselStyled>
          <Carousel.Item>
            <div className="d-flex justify-content-center gap-3 mt-4 p-4">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center gap-3 mt-4 p-4">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center gap-3 mt-4 p-4">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </Carousel.Item>
        </CarouselStyled>
      </div>
    </>
  );
};
