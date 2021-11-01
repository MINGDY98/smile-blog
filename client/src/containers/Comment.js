import React from 'react';
import { InputBase } from '@material-ui/core';
import styled from "styled-components";
import axios from 'axios';

const InfoWrapper = styled.div`
	display					: flex;
	flex-direction  : row;
`
const CommentInput = styled(InputBase)`
	border          : 1.8px solid #46508c;
	font-size       : 14px;
	margin          : 10px 0px 10px 0px;
	color           : #676A59;
`

const Comment = ({id}) => {

  const [values, setValues] = React.useState({ 
    "id"        	: "", 
    "password"  	: "", 
    "comment"     : "" 
  });

	const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ 
      ...values, 
      [name] : value, 
    });
  }

	const handleSubmit = (e) => {
		if(values.id==""||values.password==""||values.comment==""){
			if(values.comment==""){
				alert("댓글을 입력해주세요!");
			}
			else{
				alert('닉네임 혹은 비밀번호를 입력해주세요!');
			}
			e.preventDefault();

		}else{
			alert('댓글이 등록되었습니다!');
			axios.post('http://localhost:4000/createComment',{
				"postId"		:	id,
				"id"				:	values.id, 
				"password"	:	values.password, 
				"comment"		: values.comment
			}) 
			.then(function (response) {
				console.log(response); 
			}) 
			.catch(error => {
				console.log('error : ',error.response) 
			});

		}
  } 
  return (
		<div>
			<InfoWrapper>
				<InputBase
					fullWidth
					name="id" 
					placeholder="닉네임"
					value={values.id}
					onChange={handleChange}
				/>
				<InputBase
					fullWidth
					name="password" 
					placeholder="비밀번호"
					value={values.password}
					onChange={handleChange}
				/>
			</InfoWrapper>
			<CommentInput
				fullWidth
				name="comment" 
				placeholder="의견을 작성해주세요"
				value={values.comment}
				onChange={handleChange}
				multiline
				rows={5}
			/>
			<button onClick={handleSubmit}>
				등록
			</button>
		</div>
  )
}
export default Comment;