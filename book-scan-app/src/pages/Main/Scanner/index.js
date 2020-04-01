import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Quagga from 'quagga';

import { validateIsbn } from '../../../services/books';

import { Container, Video, ScanMarker } from './styles';

function Scanner({ onScan }) {
  let scannerAttemps = 0;

  const onDetected = result => {
    Quagga.offDetected(onDetected);

    const isbn = result.codeResult.code;

    if (validateIsbn(isbn)) {
      onScan(isbn);
      return;
    } else {
      if (scannerAttemps >= 5) {
        alert(
          'Não é possível ler o código do livro, por favor, tente novamente.'
        );
      }
    }

    scannerAttemps++;
    Quagga.onDetected(onDetected);
  };

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: document.querySelector('#video'),
            constraints: {
              facingMode: 'environment',
            },
          },
          numOfWorkers: 1,
          locate: true,
          decoder: {
            readers: ['ean_reader'],
          },
        },
        err => {
          if (err) {
            console.log(err);
            alert(
              'Erro ao abrir a câmera do dispositivo, por favor, dê a perissão de uso.'
            );
            return;
          }
          Quagga.start();
        },
        Quagga.onDetected(onDetected)
      );
    }
  }, []);

  return (
    <>
      <Video id="video" />
      <Container>
        <ScanMarker>
          <img
            src="https://png.pngtree.com/svg/20170822/ce8379fa9c.png"
            alt="Marca para leitura do código"
            width="260"
            height="260"
          />
          <p className="label">Aponte para o código de barras do livro</p>
        </ScanMarker>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/VisualEditor_-_Icon_-_Book.svg/1200px-VisualEditor_-_Icon_-_Book.svg.png"
          alt="Dev Samurai"
          width="69"
          height="69"
        />
      </Container>
    </>
  );
}

Scanner.propTypes = {
  onScan: PropTypes.func,
};

export default Scanner;
