import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

import Info from './Info';
import GeneralScore from './GeneralScore';
import Scores from './Scores';
import Extra from './Extra';

import { getBook } from '../../services/books';

function BookDetails() {
  const { isbn } = useParams();
  const [book, setBook] = useState({ isbn: null });

  useEffect(() => {
    const loadBook = async () => {
      const response = await getBook(isbn);
      setBook(response);
    };
    loadBook();
  }, [isbn]);

  return (
    <>
      {book.isbn && (
        <Container>
          <Info book={book} />
          <GeneralScore book={book} />
          <Scores book={book} />
          <Extra book={book} />
        </Container>
      )}
    </>
  );
}

export default BookDetails;
