import styled from 'styled-components';
import Button from './atoms/Button';

const Panel = styled(Button)<{isLight: boolean}>`
  width: 65px;
  height: 65px;
  border-radius: 0.5em;
  transition-duration: 0.2s;
  background-color: ${ ({isLight}) => isLight ? 'aliceblue' : '#498adf'}
`;

export default Panel;