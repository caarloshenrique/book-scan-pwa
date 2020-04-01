import styled from 'styled-components';

export const Container = styled.div`
  .score {
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: ${props => props.scoreColor};
    border-radius: 150px;
    height: 220px;
    width: 220px;

    font-size: 22px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;

    margin: auto;
    margin-top: 30px;

    .summary-score-value {
      font-size: 98px;
    }
  }

  .score-comment {
    font-size: 18px;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    color: #95a5ab;
    margin-top: 7px;
  }
`;
