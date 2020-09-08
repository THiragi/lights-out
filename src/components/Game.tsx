import React, {useState} from 'react';
import Board from './Board';


const Game: React.FC = ():JSX.Element => {
    const [history, setHistory] = useState<boolean[][]>(
        [Array(25).fill(true)]
    );
    const [stepNum, setStepNum] = useState(0);

    console.log(4 % 5);
    console.log(9 % 5);

    const handleClick = (i: number) => {
        const histories = history.slice(0, stepNum + 1);
        const lights = histories[histories.length - 1];

        lights[i] = !lights[i];
        if (i > 4) {
            lights[i - 5] = !lights[i - 5];
        }
        if (i < 20) {
            lights[i + 5] = !lights[i + 5]; 
        }
        if (i % 5 !== 0) {
            lights[i - 1] = !lights[i - 1];
        }
        if (i % 5 !== 4) {
            lights[i + 1] = !lights[i + 1];
        }

        setHistory(histories.concat([
            lights,
        ]));
        setStepNum(histories.length);
    };

    const current = history[stepNum];

    return (
        <div>
            <div className="game">
                <div className="game-board">
                    <Board 
                        lights={current}
                        onClick={i => handleClick(i)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Game;
