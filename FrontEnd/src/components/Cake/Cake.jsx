import React from 'react';
import { CANDLE_POSITION } from '../../constants/constant';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Cake = () => {
  const [checkedCandlePosition, setCheckedCandlePosition] = useState([0, 1, 0, 1, 1, 0, 0, 0]);

  // 촛불 불러오는 api

  useEffect(() => {
    let randomNum = Math.floor(Math.random() * 8 + 1);
    while (checkedCandlePosition[randomNum - 1] === 1) {
      randomNum = Math.floor(Math.random() * 8 + 1);
    }

    const temp = [...checkedCandlePosition];
    temp[randomNum - 1] = 1;
    setCheckedCandlePosition(temp);
  }, []);

  return (
    <St.Container>
      {checkedCandlePosition.map((it, idx) => {
        if (it === 1)
          return (
            <St.Candle
              key={idx}
              src='../public/Group.png'
              $left={CANDLE_POSITION[idx].left}
              $bottom={CANDLE_POSITION[idx].bottom}
            />
          );
      })}

      <img src='../public/Group1.png' />
    </St.Container>
  );
};

const St = {
  Container: styled.div`
    position: relative;
    width: 23.4rem;
    height: 25.2rem;
  `,

  Candle: styled.img`
    position: absolute;
    bottom: ${({ $bottom }) => css`
      ${$bottom}rem
    `};
    left: ${({ $left }) => css`
      ${$left}rem
    `};
  `,
};

export default Cake;
