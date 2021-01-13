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
        {white && white.split("").map((v,i)=> <WhiteSpan key={i}>{v}</WhiteSpan>)}
        {blue && blue.split("").map((v,i) => <span key={i}>{v}</span>)}
      </InnerHeader>
    </OuterHeader>
  );
};

export default Header;