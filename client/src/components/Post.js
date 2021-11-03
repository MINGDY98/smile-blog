import React from 'react';
import styled from "styled-components"
import {
	Padding
} from '../styles/common';

const PreviewWrapper = styled.div`
  border-bottom : 1px solid #46508c;
  padding       : 15px 5px;
  font-size     : 12px;
  overflow      : hidden;
  cursor        : pointer;
  color         : #565656;
  &: hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-bottom   : 1px solid #fc6020;
    color           : #333333;
  }
`

const PreviewTitle = styled.p`
  font-size     : 32px;
  font-weight   : 700;
  margin        : 0px;
  margin-bottom : 10px;
`

const PreviewContent = styled.p`
  font-size     : 13px;
  font-weight   : 500;
  color	        : #888888;
`

const Wrapper = styled.div`
  flex-grow     : 1;
`

const Post = ({ data }) => {

  return (
    <Wrapper >
      <PreviewWrapper
        onClick={() => window.location.href="/read/"+data.idpost}
      >
        <PreviewTitle>{data.title}</PreviewTitle>
        <PreviewContent>{data.content.slice(0, 50)}</PreviewContent>
      </PreviewWrapper>
      <Padding/>
    </Wrapper>
  )
}

export default Post;