import React from 'react';
import styled from "styled-components";
import { 
  Typography 
} from '@mui/material';

const TitleText = styled(Typography)`
	font-size				: 20px;
	font-weight			: 700;
	cursor					: pointer;
	color						: #fc6020;
  align-self  		: center;
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