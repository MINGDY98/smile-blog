import React from 'react';
import axios from 'axios';
import styled from "styled-components";

const Field = styled.input`
  font-size       : 10px;
  font-weight     : 600;
  border          : none;
  background      : none;
  &:focus{
    outline : none;
  }
`

const Wrapper = styled.div`
  padding         : 3px 10px;
  background-color: #FFFFFF;
  margin-right    : 10px;
  display         : flex;
  align-items     : center;
  border-radius   : 3px;
`

const DeleteButton = styled.button`
  border          : none;
  background      : none;
  color           : #333333;
  font-size       : 10px;
  font-weight     : 600;
  cursor          : pointer;
  padding         : 0;
`

const DeleteComment = ({comment}) => {

  const [commentDelete, setCommentDelete] = React.useState({
    password: "", 
  })

  const handleDeleteChange = (e) => {
    const { name, value } = e.target;
    setCommentDelete({ 
      ...commentDelete, 
      [name]: value 
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if( commentDelete.password ==="" ){
      alert( "비밀번호를 입력해주세요." );
    }else if(commentDelete.password !== comment.password) {
      alert( "비밀번호가 틀렸습니다." );
    }else{
      axios.delete('http://localhost:4000/comment/delete/'+comment.commentId) 
      .then(function ( response ) { 
        console.log( response ); 
        alert('댓글이 삭제되었습니다!');
      }) 
      .catch(error => { 
        console.log( 'error : ',error.response ) 
      });
    }
    window.location.reload();
  }

  return (  
    <Wrapper>
      <Field
        name="password" 
        placeholder="비밀번호를 입력해주세요."
        value={commentDelete.password}
        onChange={handleDeleteChange}
        size="small"
      />
      <DeleteButton onClick={handleSubmit}>
        입력
      </DeleteButton>
    </Wrapper>
  )
}
export default DeleteComment;