import React from 'react';
import styled from "styled-components";
import Title from '../components/Title';
import { Typography,Button } from '@material-ui/core';

const NavigationWrapper = styled.div`
	height					: 40px;
  padding					: 0px 20px;
  margin	  			: 0px auto;
`

const ButtonWrapper = styled.div`
	display					: flex;
	align-items			: center;
	height					: 100%;
  justify-content : space-between;
`

const CreateButton = styled(Button)`

  font-weight     : 600;
  font-size       : 14px;
  background-color: #8FB896;
  border          : 1px solid #DDD;
  &:hover {
    background-color : #7EA785;
  }
`

const CreateText= styled(Typography)`
  font-size     : 14px;
  color         : #333333;
`

const NavigationBar = () => {

  return (
    <NavigationWrapper>
      <ButtonWrapper>
        <Title/>
        <CreateButton
          onClick={() => window.location.href="/write"}
        >
          <CreateText>새 글 작성</CreateText>
        </CreateButton>
      </ButtonWrapper>
    </NavigationWrapper>
  )
}
export default NavigationBar;