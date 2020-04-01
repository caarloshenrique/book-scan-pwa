import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Score = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-right: 10px;

  .label {
    color: ${props => props.scoreColor};
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }
`;

export const Value = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.scoreColor};
  border-radius: 50px;

  height: 43px;
  width: 43px;

  margin-right: 5px;

  span {
    color: #ffffff;
  }

  .value {
    font-weight: bold;
  }
`;
