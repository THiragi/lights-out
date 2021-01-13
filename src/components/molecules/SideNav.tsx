import React from 'react';
import NewGameButton from '../atoms/button/NewGameButton';
import RestartButton from '../atoms/button/RestartButton';
import styled from 'styled-components';


const NavFrame = styled.div`
  width: 235px;
  height: 357px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  margin: 4px;
`;

type Props = {
  stepCount: number,
  message: string | false,
  restart: () => void,
  newGame: () => void,
};

const SideNav: React.FC<Props> = ({stepCount, message, restart, newGame}) => (
  <NavFrame>
      <RestartButton 
        stepCount={stepCount}
        message={message}
        onClick={restart}
      />
      <NewGameButton onClick={() => newGame()}>
        NEW GAME
      </NewGameButton>
  </NavFrame>
);

export default SideNav;