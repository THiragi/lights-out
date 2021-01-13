import React from 'react';
import OuterHeader from '../atoms/header/OuterHeader';
import InnerHeader from '../atoms/header/InnerHeader';
import WhiteSpan from '../atoms/WhiteSpan';
type Props = {
  white?: string,
  blue?: string,
};


const Header:React.FC<Props> = ({white, blue}) => {
  return (
    <OuterHeader>
      <InnerHeader>
        {white && white.split("").map(s => <WhiteSpan>{s}</WhiteSpan>)}
        {blue && blue.split("").map(s => <span>{s}</span>)}
      </InnerHeader>
    </OuterHeader>
  );
};

export default Header;