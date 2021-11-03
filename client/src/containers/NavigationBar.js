import React from 'react';
import styled from "styled-components";
import {
  PrimaryButton
} from '../styles/common';
import Title from '../components/Title';

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

const CreateButton = styled(PrimaryButton)`
  &:hover {
    background-color : #fc6020;
  }
`

const CreateText= styled.div`
  font-size       : 14px;
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