import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import { InputBase } from '@material-ui/core';

const Field = styled(InputBase)`
	font-size       : 10px;
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
      axios.delete('http://localhost:4000/delete/comment/'+comment.commentId) 
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
    <div>
     <Field
			name="password" 
		  placeholder="비밀번호를 입력해주세요."
			value={commentDelete.password}
			onChange={handleDeleteChange}
			size="small"
		  />
      <button onClick={handleSubmit}>
        입력
      </button>
    </div>

  )
}
export default DeleteComment;