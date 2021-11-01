import styled from "styled-components";
import { Button } from '@material-ui/core';

export const Spacer = styled.div`
  flex-grow				: 1;
`

export const Padding = styled.div`
	padding-top 		: 15px;
`

export const PrimaryButton = styled(Button)`
  font-weight     : 600;
  font-size       : 14px;
  background-color: #46508c;
  border          : 1px solid #DDD;
  color           : white;
`