import React from 'react';
import styled from 'styled-components';

const InnerHeader = styled.div`
  height: 100px;
  width: 700px;
  margin: 0 auto;
  color: #498adf;
  font-size: 84px;
  vertical-align: middle;
`;

const OuterHeader = styled.header`
  width: 100%;
  padding: 60px 0;
`;

type Props = {
  children: React.ReactNode,
};


const Header:React.FC<Props> = ({children}) => {
  return (
    <OuterHeader>
      <InnerHeader>
        {children}
      </InnerHeader>
    </OuterHeader>
  );
};

export default Header;