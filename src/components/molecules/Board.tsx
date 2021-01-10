import React from 'react';
import Square from '../atoms/Square';

type Props = {
    lights: boolean[];
    onClick: (i: number) => void;
}

const Board:React.FC<Props> = ({lights, onClick}): JSX.Element => {

    const renderSquare = (i: number) => {
        return (
            <Square 
                key={i}
                value={lights[i]}
                onClick={() => onClick(i)}
            />
        );
    }
    
    // まず0~8の連番の配列を生成
    const nums: number[] = [...Array(25)].map((_,i) => i);
    // 配列の中身を3要素ごとに分割
    const sqrSet: number[][] = chunk(nums, 5);
    // map()で1行3列のマス目をレンダリングしていく
    return (
        <>
            {sqrSet.map((v, i) => {
                return (
                    <div key={i} className="board-row">
                        {v.map( n => renderSquare(n))}
                    </div>
                );
            })}
        </>
    );
};

export default Board;

function chunk<T extends any[]>(arr: T, size: number) {
    return arr.reduce(
        (newarr, _, i) => (i % size ? newarr : [...newarr, arr.slice(i, i + size)]),
        [] as T[][]
    )
}