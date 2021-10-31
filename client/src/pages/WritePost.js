import React from 'react';
import styled from "styled-components";
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';

const PostInput = styled(InputBase)`
	border          : 1.8px solid #46508c;
	font-size       : 14px;
	margin          : 10px 0px 10px 0px;
	color           : #676A59;
	border-radius   : 5px;
`

const ContentInput = styled(InputBase)`
	border          : 1.8px solid #46508c;
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
        placeholder="제목을 입력하세요."
      />

			<ContentInput
				fullWidth
				name="content" 
				placeholder="당신의 이야기를 적어주세요."
				multiline
				rows={10}
			/>

		</Container>
  )
}
export default WritePost;