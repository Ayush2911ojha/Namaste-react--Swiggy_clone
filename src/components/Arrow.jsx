import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CustomPrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

export { CustomPrevArrow, CustomNextArrow };
