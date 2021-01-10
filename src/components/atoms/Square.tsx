import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Panel = styled(Button)<{isLight: boolean}>`
  width: 65px;
  height: 65px;
  border-radius: 0.5em;
  transition-duration: 0.2s;
  background-color: ${ ({isLight}) => isLight ? 'aliceblue' : '#498adf'};
`;

type Props = {
    value: boolean;
    onClick: () => void;
  }
  
  const Square:React.FC<Props> = ({value, onClick}): JSX.Element => {
    return (
        <Panel
            isLight={value}
            className="square"
            onClick={() => onClick()}
        >
        </Panel>
    );
  }


export default Square;