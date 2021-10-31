import React from 'react';
import styled from "styled-components";
import axios from 'axios';
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
  const [values, setValues] = React.useState({ 
    "title"        : "", 
		"content"      : "", 
  });

	const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ 
      ...values, 
      [name]: value 
    });
  } 

	const handleSubmit = ( e ) => {
		if( values.title === "" ){
      alert( "제목을 입력해주세요." );
    }else if( values.content === "" ){
      alert( "내용을 입력해주세요." );
    }else{
			alert( "등록완료." );
			axios.post('http://localhost:4000/write',{ 
				"title"   	: values.title, 
				"content"   : values.content, 
			}) 
			.then( function (response) {
				 console.log(response); 
			}) 
			.catch( error => {
				console.log('error : ',error.response) 
			});
		}
  }

  return (

		<Container maxWidth="sm">
			<PostInput 
				fullWidth
        name="title" 
        placeholder="제목을 입력하세요."
				value={values.title} 
				onChange={handleChange}
      />

			<ContentInput
				fullWidth
				name="content" 
				placeholder="당신의 이야기를 적어주세요."
				multiline
				rows={10}
				value={values.content} 
				onChange={handleChange}
			/>
			<button onClick={handleSubmit} >
				작성
			</button>
		</Container>
  )
}
export default WritePost;