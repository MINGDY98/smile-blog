import React from 'react';
import styled from "styled-components"
import dayjs from 'dayjs';

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

  return (
		<div>
			<CommenterInfo>
			<div>
				{comment.id}
				<Date>{dayjs(comment.date).format("YYYY년 MM월 DD일 HH:mm")}</Date>
			</div>
			<EditButton>삭제</EditButton>
			</CommenterInfo>
			<CommentWrapper>{comment.comment}</CommentWrapper>
			<Line/>
		</div>
  )
}

export default Comment;