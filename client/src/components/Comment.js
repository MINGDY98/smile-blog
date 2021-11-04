import React from 'react';
import styled from "styled-components"
import dayjs from 'dayjs';
import { Collapse } from '@mui/material';
import DeleteComment from './DeleteComment';

const EditButton = styled.button`
  border          : none;
  background      : none;
  display         : inline-block;
  cursor          : pointer;
  font-size       : 10px;
  color           : #888888;
`

const CommenterInfo = styled.div`
  padding         : 10px;
  display         : flex;
  justify-content : space-between;
`

const CommentWrapper = styled.div`
  font-size       : 12px;
  margin          : 0px 12px 0px 12px;
  color           : #565656;
  font-weight     : 500;
`

const Line = styled.hr`
  margin          : 16px 0px 0px 0px;
  border          : 0;
  height          : 1px;
  background-color: #46508c;
`

const Date = styled.span`
  padding-left    : 6px;
  display         : inline-block;
  font-size       : 12px;
  font-weight     : 400;
  color           : #888888;
`

const CommentHeader = styled.p`
  font-size       : 16px;
  margin          : 0px;
  font-weight     : 600;
`

const DeleteContainer = styled.div`
  display         : flex;
  justify-content : flex-end;
`

const Comment = ({ comment }) => {

  const [openDelete, setOpenDelete] = React.useState(false);

  return (
    <div>
      <CommenterInfo>
        <CommentHeader>
          {comment.id}
          <Date>{dayjs(comment.date).format("YYYY년 MM월 DD일 HH:mm")}</Date>
        </CommentHeader>
        <EditButton onClick={() => setOpenDelete(!openDelete)}>
          {openDelete ? <div>취소</div> : <div>삭제</div>}
        </EditButton>
      </CommenterInfo>
      <DeleteContainer>
        <Collapse in={openDelete} timeout="auto" unmountOnExit>
          <DeleteComment comment={comment}/>
        </Collapse>
      </DeleteContainer>
      <CommentWrapper>
        {comment.comment}
      </CommentWrapper>
      <Line/>
    </div>
  )
}

export default Comment;