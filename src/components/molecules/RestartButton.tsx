import styled from 'styled-components';
import Button from '../atoms/Button';

const RestartButton = styled(Button)`
  cursor: pointer;
  height: 120px;
  width: 120px;
  color: ghostwhite;
  background-color: #498adf;
  font-size: 20px;
  border-radius: 50%;
  transition-duration: 0.4s;
  &:hover {
    font-size: 24px;
    color: #498adf;
    background-color: ghostwhite;
  }
`;

export default RestartButton;