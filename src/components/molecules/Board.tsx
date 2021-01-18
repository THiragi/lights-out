import React from 'react';
import Square from '../atoms/button/Square';
import styled, { keyframes } from 'styled-components';

const BoardFrame = styled.div`
	height: 365px;
	width: 365px;
	display: block;
	position: relative;
`;

const wave = keyframes`
	0% { 
		transform: scale(1, 1);
		opacity: 1;
	}
	100% {
		transform: scale(6, 6); 
		opacity: 0.0; 
	}
`;

const Drop = styled.span`
	background: ghostwhite;
	position: absolute;
	height: 65px;	
	width: 65px;
	border-radius: 50%;
	top: 150px;
	left: 150px;
	z-index: -2;
	animation: 1s ${wave} ease;
`;


type Props = {
	side: number,
	isComplete: boolean,
	lights: boolean[],
	onClick: (i: number) => void,
}

const chunk = <T extends any[]>(arr: T, size: number) => {
	return arr.reduce(
		(newarr, _, i) => (i % size ? newarr : [...newarr, arr.slice(i, i + size)]),
		[] as T[][]
	)
}

const Board:React.FC<Props> = ({side, isComplete, lights, onClick}): JSX.Element => {

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
	const nums: number[] = [...Array(side * side)].map((_,i) => i);
	// 配列の中身を3要素ごとに分割
	const sqrSet: number[][] = chunk(nums, side);
	// map()で1行3列のマス目をレンダリングしていく
	return (
		<BoardFrame>
			{sqrSet.map((v, i) => {
				return (
					<div key={i} className="board-row">
							{v.map( n => renderSquare(n))}
					</div>
				);
			})}
			{isComplete && <Drop />}
		</BoardFrame>
	);
};

export default Board;

