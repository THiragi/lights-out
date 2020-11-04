import styled from 'styled-components';
import Button from './atoms/Button';

const RestartButton = styled(Button)`
  cursor: pointer;
  height: 65px;
  width: 130px;
  color: ghostwhite;
  background-color: #498adf;
  font-size: 20px;
  border-radius: 0.5em;
  transition-duration: 0.4s;
  &:hover {
    font-size: 24px;
    color: #498adf;
    background-color: ghostwhite;
  }
`;

export default RestartButton;