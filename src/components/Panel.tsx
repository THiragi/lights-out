import styled from 'styled-components';

const Panel = styled.button<{isLight: boolean}>`
  transition: 0.2s;
  border-radius: 0.5em;
  margin: 4px;
  background-color: transparent;
  pdding: 0;
  border: none;
  outline: none;
  appearance: none;
  width: 65px;
  height: 65px;
  background-color: ${ ({isLight}) => isLight ? 'skyblue' : 'lightgray'}
`;

export default Panel;