import React from 'react';
import NewGameButton from '../atoms/button/NewGameButton';
import RestartButton from '../atoms/button/RestartButton';
import styled from 'styled-components';


const NavFrame = styled.div`
  width: 365px;
  display: flex;
  justify-content:space-between;
  margin-top: 40px;
`;

type Props = {
  stepCount: number,
  isComplete: boolean,
  restart: () => void,
  newGame: () => void,
};

const Navi: React.FC<Props> = ({stepCount, isComplete, restart, newGame}) => (
  <NavFrame>
      <RestartButton 
        stepCount={stepCount}
        isComplete={isComplete}
        onClick={restart}
      />
      <NewGameButton onClick={() => newGame()}>
        NEW GAME
      </NewGameButton>
  </NavFrame>
);

export default Navi;