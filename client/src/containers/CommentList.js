import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import Comment from '../components/Comment';
import { PrimaryButton } from '../styles/common';

const InfoWrapper = styled.div`
  display         : flex;
  flex-direction  : row;
  gap             : 10px;
`

const Wrapper = styled.div`
  padding-bottom  : 100px;
`

const CommentInput = styled.textarea`
  border          : 1px solid #46508c;
  font-size       : 14px;
  width           : calc(100% - 20px);
  margin          : 10px 0px 12px 0px;
  padding         : 10px;
  color           : #676A59;
  font-size       : 12px;
  font-weight     : 600;
  border-radius   : 5px;
  resize          : none;
`

const CommentsWrapper = styled.div`
  font-size       : 14px;
  margin          : 12px 0px 12px 0px;
  background-color: #f0f2f5;
`

const CommentForm = styled.input`
  border          : none;
  padding         : 8px 15px;
  width           : 100%;
  border-radius   : 5px;
  background-color: #F1F1F1;
  color           : #565656;
  font-weight     : 600;
`

const SubmitWrapper = styled.div`
  display         : flex;
  justify-content : flex-end;
`

const CommentList = ({id,post}) => {

  const [values, setValues] = React.useState({ 
    "id"        : "", 
    "password"  : "", 
    "comment"   : "" 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
      setValues({ 
      ...values, 
      [name] : value, 
    });
  }

  const handleSubmit = (e) => {
    if(values.id===""||values.password===""||values.comment===""){
      if(values.comment===""){
        alert("댓글을 입력해주세요!");
      }
      else{
        alert('닉네임 혹은 비밀번호를 입력해주세요!');
      }
      e.preventDefault();

      }else{
        alert('댓글이 등록되었습니다!');
        axios.post('http://localhost:4000/createComment',{
        "postId"    : id,
        "id"        : values.id, 
        "password"  : values.password, 
        "comment"   : values.comment
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
    <Wrapper>
      <InfoWrapper>
        <CommentForm
          fullWidth
          name="id" 
          placeholder="닉네임"
          value={values.id}
          onChange={handleChange}
        />
        <CommentForm
          fullWidth
          name="password" 
          type="password"
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
        rows={7}
      />
      <SubmitWrapper>
        <PrimaryButton onClick={handleSubmit}>
          등록
        </PrimaryButton>
      </SubmitWrapper>
      {post.commentList ?		
      <CommentsWrapper>
      {post.commentList.map((comment,idx)=>(
        <Comment key={idx} comment={comment}/>
      ))}
      </CommentsWrapper> : <></>}
    </Wrapper>
  )
}
export default CommentList;