import React from 'react';
import Panel from './Panel';

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