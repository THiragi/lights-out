import styled from 'styled-components';
import RoundButton from './RoundButton';

const NewGameButton = styled(RoundButton)`
color: ghostwhite;
background-color: #498adf;
transition-duration: 0.4s;
&:hover {
  font-size: 24px;
  color: #498adf;
  background-color: ghostwhite;
}
`;

export default NewGameButton;