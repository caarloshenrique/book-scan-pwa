import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Extra = ({ book }) => {
  return (
    <>
      <Container>
        <span className="title">Tecnologias:</span>
        <p>{book.tecnologies && book.tecnologies.join(', ')}</p>
      </Container>
      <Container>
        <span className="title">Requisitos:</span>
        <p>{book.requirements && book.requirements.join(', ')}</p>
      </Container>
      <Container>
        <span className="title">Descrição:</span>
        <p>{book.description}</p>
      </Container>
    </>
  );
};

Extra.propTypes = {
  book: PropTypes.shape({
    description: PropTypes.string,
    tecnologies: PropTypes.array,
    requirements: PropTypes.array,
  }).isRequired,
};

export default Extra;
