import React, {useState} from 'react';
import Board from './Board';
import GameBoard from './GameBoard';
import StepCounter from './StepCounter';
import RestartButton from './RestartButton';

const Game: React.FC = ():JSX.Element => {
    const [history, setHistory] = useState<boolean[][]>(
        [
            [
                false, false, true, false, false,
                false, true, false, false, false,
                true, false, true, false, true,
                false, false, false, true, false,
                false, false, true, false, false,

            ]
        ]
    );
    const [stepNum, setStepNum] = useState(0);

    const restart = () => {
        setStepNum(0);
        setHistory([history[0]]);
    }

    const handleClick = (i: number) => {
        const histories = history.slice(0, stepNum + 1);
        const current = histories[histories.length - 1];
        const lights = current.slice();

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
        <GameBoard>
            <Board 
                lights={current}
                onClick={i => handleClick(i)}
            />
            <StepCounter>
                {stepNum}
            </StepCounter>
            <RestartButton
                onClick={() => restart()}
            >
                RESTART
            </RestartButton>
        </GameBoard>
    );
}

export default Game;
