import React from 'react';
import styled from "styled-components"
import {
	Padding
} from '../styles/common';

const PreviewWrapper = styled.div`
	border          : 1px solid #46508c;
	border-radius   : 5px;
	padding         : 15px;
	overflow				: hidden;
	text-overflow		: ellipsis;
	white-space			: nowrap;
`

const Post = ({ data }) => {

  return (
		<div>
			<PreviewWrapper
				onClick={() => window.location.href="/read/"+data.idpost}
			>
				{data.title}
			</PreviewWrapper>
			<Padding/>
		</div>
  )
}

export default Post;