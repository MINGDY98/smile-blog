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

const CommentsWrapper = styled.div`
	font-size       	: 14px;
	margin          	: 10px 0px 10px 0px;
	background-color 	:	#f0f2f5;
	height 						: 100px;
`

const CommenterInfo = styled.div`
	display					: flex;
`

const Line = styled.hr`
  margin             : 16px 0px;
  border-top         : 1px solid #46508c;
  border-bottom      : 1px solid #fff;
`

const Comment = ({id,post}) => {

  const [values, setValues] = React.useState({ 
    "id"        	: "", 
    "password"  	: "", 
    "comment"     : "" 
  });

	React.useEffect(()=>{
		if(post.commentList){
			console.log("post",post.commentList);
		}

  }, [post]);

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
			window.location.reload();
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
			{post.commentList ?		
				<CommentsWrapper>
					{post.commentList.map((comment,idx)=>(
						<div>
							<CommenterInfo>
								{comment.id}
							</CommenterInfo>
							<Line/>
						</div>
					))}
				</CommentsWrapper> : <></>}
				
		</div>
  )
}
export default Comment;