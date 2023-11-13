/* eslint-disable react/prop-types */
import {
  PaginationStyle,
  PagPrevStyle,
  PagItemStyle,
  PagNextStyle,
} from './StylesComponentsProfiles';

export const PaginationProfiles = ({
  byPage,
  currentPage,
  setCurrentPage,
  total,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / byPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (specific) => {
    setCurrentPage(specific);
  };

  return (
    <PaginationStyle className="justify-content-center">
      <PagPrevStyle
        className={currentPage === 1 ? 'disabled' : ''}
        onClick={onPreviousPage}
      >
        <i className="bi bi-arrow-left p-1"></i>
        Anterior
      </PagPrevStyle>
      {pageNumbers.map((noPage) => (
        <PagItemStyle
          key={noPage}
          className={noPage === currentPage ? 'active' : ''}
          onClick={() => onSpecificPage(noPage)}
        >
          {noPage}
        </PagItemStyle>
      ))}

      <PagNextStyle
        className={currentPage >= pageNumbers.length ? 'disabled' : ''}
        onClick={onNextPage}
      >
        Siguiente
        <i className="bi bi-arrow-right p-1"></i>
      </PagNextStyle>
    </PaginationStyle>
  );
};
