import React from 'react';
import styled from "styled-components"
import {
	Padding
} from '../styles/common';

const PostWrapper = styled.div`
  border          : 1px solid #46508c;
  border-radius   : 5px;
  padding         : 15px;
`

const Post = ({ data }) => {

  return (
		<div>
			<PostWrapper>
				{data.title}
			</PostWrapper>
			<Padding/>
		</div>
  )
}

export default Post;