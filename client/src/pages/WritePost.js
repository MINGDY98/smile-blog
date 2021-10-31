import React from 'react';
import styled from "styled-components";
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';

const PostInput = styled(InputBase)`
	border          : 1.8px solid #b6c37b;
	font-size       : 14px;
	margin          : 10px 0px 10px 0px;
	color           : #676A59;
	border-radius   : 5px;
`

const WritePost= () => {

  return (

		<Container maxWidth="sm">
			<PostInput 
				fullWidth
        name="title" 
        placeholder="제목을 입력하시오."
      />

			<PostInput
				fullWidth
        name="content" 
        placeholder="당신의 이야기를 적어주세요."
				multiline
			/>

		</Container>
  )
}
export default WritePost;