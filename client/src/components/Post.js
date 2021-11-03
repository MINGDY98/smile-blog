import React from 'react';
import styled from "styled-components"
import {
	Padding
} from '../styles/common';

const PreviewWrapper = styled.div`
	border          : 1px solid #46508c;
	border-radius   : 5px;
	padding         : 15px;
	font-size				: 12px;
	overflow				: hidden;
	text-overflow		: ellipsis;
	white-space			: nowrap;
`

const Wrapper = styled.div`
	flex-grow				: 1;
`

const Post = ({ data }) => {

  return (
		<Wrapper >
			<PreviewWrapper
				onClick={() => window.location.href="/read/"+data.idpost}
			>
				{data.title}
			</PreviewWrapper>
			<Padding/>
		</Wrapper>
  )
}

export default Post;