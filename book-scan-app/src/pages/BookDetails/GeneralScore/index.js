import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import { calculateScore } from '../../../services/books';

const GeneralScore = ({ book }) => {
  const { color, label, recommended } = calculateScore(book.score);

  return (
    <Container scoreColor={color}>
      <div className="score">
        <span className="summary-score-value">{book.score}</span>
        <span>{label}</span>
      </div>
      {recommended && (
        <p className="score-comment">Recomendado pelo editores</p>
      )}
    </Container>
  );
};

GeneralScore.propTypes = {
  book: PropTypes.shape({
    score: PropTypes.number,
  }).isRequired,
};

export default GeneralScore;
