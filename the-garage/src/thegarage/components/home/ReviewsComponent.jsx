import { Carousel } from "react-bootstrap";
import { CarouselStyled, SubTitleStyled } from "./ComponentsStyles";
import { ReviewCard } from "./ReviewCard";
import { useAllRatings } from "../../../domain/useRatings";

export const ReviewsComponent = () => {
  const { data, loading, error } = useAllRatings();

  return (
    <>
      <div className="bg-main-color pt-4">
        <SubTitleStyled color="white">Comentarios</SubTitleStyled>

        <CarouselStyled>
          {data.map((rating, index) => {
            if (index % 3 === 0) {
              return (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-center gap-3 mt-4 p-4">
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
      </div>
    </>
  );
};
