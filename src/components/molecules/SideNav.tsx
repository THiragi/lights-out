import React from 'react';
import Display from '../atoms/Display';
import RoundButton from '../atoms/RoundButton';
import StepCounter from '../atoms/StepCounter';
import styled from 'styled-components';


const NavFrame = styled.div`
  margin-left: 27px;
  width: 308px;
  height: 365px;
  display: flex;
  flex-direction: column;
`;

const ButtonBar = styled.div`
  margin-top:auto;
  display: flex;
  justify-content: space-between;
`;

type Props = {
  stepNum: number,
  message: false | string,
  restart: () => void,
  newGame: () => void,
};

const SideNav: React.FC<Props> = ({stepNum, message, restart, newGame}) => (
  <NavFrame>
    <Display>
      {message}
    </Display>
    <StepCounter>
      step: {stepNum}
    </StepCounter>
    <ButtonBar>
      <RoundButton
        onClick={() => restart()}
        >
        RESTART
      </RoundButton>
      <RoundButton onClick={() => newGame()}>
        NEW GAME
      </RoundButton>
    </ButtonBar>
  </NavFrame>
);

export default SideNav;