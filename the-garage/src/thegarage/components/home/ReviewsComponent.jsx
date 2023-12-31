import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';

import { CarouselStyled, SubTitleStyled } from './ComponentsStyles';
import { ReviewCard } from './ReviewCard';
import { useAllRatings } from '../../../domain/useRatings';

export const ReviewsComponent = () => {
  const { data, loading, error } = useAllRatings();

  return (
    <>
      <div className="bg-main-color pt-4" style={{ minWidth: '700px' }}>
        <SubTitleStyled color="white">Comentarios</SubTitleStyled>
        {error && (
          <div className="d-flex flex-wrap justify-content-center gap-5">
            <Alert variant="danger">
              No se pudo obtener el recurso, por favor recarga la página
            </Alert>
          </div>
        )}
        {loading && <Spinner animation="border" variant="primary" />}
        {data && (
          <CarouselStyled>
            {data.map((rating, index) => {
              if (index % 3 === 0) {
                return (
                  <Carousel.Item key={index}>
                    <div
                      className="d-flex justify-content-center gap-5 py-5"
                      data-cy="review-item"
                    >
                      {data
                        .slice(index, Math.min(index + 3, data.length))
                        .map((item, subIndex) => (
                          <ReviewCard key={subIndex} item={item} />
                        ))}
                    </div>
                  </Carousel.Item>
                );
              } else {
                return null;
              }
            })}
          </CarouselStyled>
        )}
      </div>
    </>
  );
};
