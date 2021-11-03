import React from 'react';
import styled from "styled-components"
import dayjs from 'dayjs';
import { Collapse } from '@mui/material';
import DeleteComment from './DeleteComment';

const EditButton = styled.button`
	border					: none;
	background			: none;
	display					:	inline-block;
	cursor					:	pointer;
	font-size       : 12px;
`
const CommenterInfo = styled.div`
	padding					: 12px 0px 6px 0px;
	margin					: 0px 12px 0px 12px;
	display					:	flex;
	justify-content	: space-between;
`

const CommentWrapper = styled.div`
	font-size       : 14px;
	margin					: 0px 12px 0px 12px;
`

const Line = styled.hr`
  margin          : 16px 0px 0px 0px;
  border-top      : 1px solid #46508c;
  border-bottom   : 1px solid #fff;
`

const Date = styled.div`
	padding-left 		: 6px;
	display					:	inline-block;
	font-size       : 12px;
`

const Comment = ({ comment }) => {

	const [openDelete, setOpenDelete] = React.useState(false);
	
  return (
		<div>
			<CommenterInfo>
				<div>
					{comment.id}
					<Date>{dayjs(comment.date).format("YYYY년 MM월 DD일 HH:mm")}</Date>
				</div>
				<EditButton onClick={() => setOpenDelete(!openDelete)}>
					{openDelete ? <div>취소</div> : <div>삭제</div>}
				</EditButton>
				<Collapse in={openDelete} timeout="auto" unmountOnExit>
					<DeleteComment comment={comment}/>
				</Collapse>
			</CommenterInfo>
			<CommentWrapper>{comment.comment}</CommentWrapper>
			<Line/>
		</div>
  )
}

export default Comment;