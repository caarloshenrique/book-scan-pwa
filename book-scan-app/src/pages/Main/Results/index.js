import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { MdArrowForward } from 'react-icons/md';

import { getBook } from '../../../services/books';

import { Container, Wrapper, Cover, Info, ActionButtons } from './styles';

function Results({ isbn }) {
  const [book, setBook] = useState();

  useEffect(() => {
    const loadBook = async () => {
      const response = await getBook(isbn);
      setBook(response);
    };
    loadBook();
  }, [isbn]);

  return (
    <Container>
      <Link to={`/book-details/${isbn}`}>
        <Wrapper>
          <Cover src={book.coverImage} />
          <Info>
            <h4 className="name">Código Limpo</h4>
            <div className="book-rating">
              <StarRatings
                rating={4.9}
                starRatedColor="#f1c40f"
                starDimension="18"
                starSpacing="0"
              />{' '}
              (4.9)
            </div>
            <div className="price">
              <span className="discount">R$99,90</span> por <span>R$39,90</span>
            </div>
          </Info>
          <ActionButtons>
            <span className="button">
              <MdArrowForward size={32} color="#fff" />
            </span>
          </ActionButtons>
        </Wrapper>
      </Link>
    </Container>
  );
}

Results.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default Results;
