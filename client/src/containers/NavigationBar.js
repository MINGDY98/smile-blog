import React from 'react';
import styled from "styled-components";
import {
  PrimaryButton
} from '../styles/common';
import Title from '../components/Title';

const NavigationWrapper = styled.div`
	height					: 60px;
  margin	  			: 0px auto;
  border-bottom   : 1px solid #EEEEEE;
`

const ButtonWrapper = styled.div`
	display					: flex;
	align-items			: center;
	width           : 100%;
  height          : 100%;
  justify-content : space-between;
`

const NavigationBar = () => {

  return (
    <NavigationWrapper>
      <ButtonWrapper>
        <Title/>
        <PrimaryButton
          onClick={() => window.location.href="/write"}
        >
          새 글 작성
        </PrimaryButton>
      </ButtonWrapper>
    </NavigationWrapper>
  )
}
export default NavigationBar;