import styled from 'styled-components';
import Button from './Button';

const RoundButton = styled(Button)`
  cursor: pointer;
  height: 134px;
  width: 134px;
  color: ghostwhite;
  background-color: #498adf;
  font-size: 18px;
  border-radius: 50%;
  transition-duration: 0.4s;
  &:hover {
    font-size: 20px;
    color: #498adf;
    background-color: ghostwhite;
  }
`;

export default RoundButton;