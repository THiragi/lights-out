import styled from 'styled-components';
import Button from './Button';

const RoundButton = styled(Button)`
  cursor: pointer;
  height: 165px;
  width: 165px;
  border-radius: 50%;
  font-size: 24px;
  margin-left: auto;
`;

export default RoundButton;