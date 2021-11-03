import React from 'react';
import styled from "styled-components";

const TitleText = styled.p`
  font-size   : 20px;
  font-weight : 900;
  cursor      : pointer;
  color       : #fc6020;
  align-self  : center;
`

const Title = () => {

  return (  
    <TitleText
      onClick={()=>window.location.href="/"}
    >
      smile_log
    </TitleText>
  )
}
export default Title;