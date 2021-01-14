import styled from 'styled-components';
import RoundButton from './RoundButton';

const RestartButton = styled(RoundButton)<{stepCount: number, isComplete: boolean}>`
  color: ghostwhite;
  background-color: #498adf;
  transition-duration: 0.4s;
  ${({stepCount}) => stepCount > 0 && `
    &:hover {
      font-size: 24px;
      color: #498adf;
      background-color: ghostwhite;
    }
    &:hover:before {
      content: "RESTART";
    }
  `}
  &:before {
    content: "${({isComplete, stepCount}) => isComplete ? `CLEAR!`: stepCount.toString(10)}" ;
  }
`;

export default RestartButton;