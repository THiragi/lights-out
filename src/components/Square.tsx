import React from 'react';

type Props = {
    value: boolean;
    onClick: () => void;
}

const Square:React.FC<Props> = ({value, onClick}): JSX.Element => {

    const light = value ? 'yellow' : 'gray';

    const style = {
        width: '30px',
        height: '30px',
        backgroundColor: `${light}`
    }
    return (
        <button 
            style={style}
            className="square"
            onClick={() => onClick()}
        >
            {value}
        </button>
    );
}

export default Square;