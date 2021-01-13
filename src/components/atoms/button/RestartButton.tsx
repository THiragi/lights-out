import styled from 'styled-components';
import RoundButton from './RoundButton';

const RestartButton = styled(RoundButton)<{stepCount: number, message: string | false}>`
  color: ghostwhite;
  background-color: #498adf;
  transition-duration: 0.4s;
  ${({stepCount}) => stepCount > 0 && `
    &:hover {
      font-size: 26px;
      color: #498adf;
      background-color: ghostwhite;
    }
    &:hover:before {
      content: "RESTART";
    }
  `}
  ${({message}) => !message && "font-size: 36px;"}
  &:before {
    content: "${({message, stepCount}) => message || stepCount.toString(10)}" ;
  }
`;

export default RestartButton;