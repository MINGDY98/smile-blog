import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components"
import {Container,Typography} from '@material-ui/core';
import dayjs from 'dayjs';
import CommentList from '../containers/CommentList';
const PostWrapper = styled.div`
  border          : 1px solid #46508c;
  padding         : 15px;
	margin          : 15px;
	min-height			: 500px;
`

const Line = styled.hr`
	margin					: 16px 0px;
  border					: 1px solid #46508c;
`

const Date = styled.div`
	display					:	inline-block;
	font-size       : 12px;
`

const EditButton = styled.button`
	border					: none;
	background			: none;
	display					:	inline-block;
	cursor					:	pointer;
	font-size       : 12px;
`

const Wrapper = styled.div`
	display					: flex;
	justify-content	: space-between;
`

const ContentWrapper = styled.div`
	min-height			: 250px;
`

const ReadPost = () => {

	const { id } = useParams();
	const [post, setPost] = React.useState([]);
	const callPostApi = async()=>{
    const response = await axios.get('http://localhost:4000/read/'+ id);
    return response.data;
  }

	React.useEffect(()=>{
		callPostApi()
    .then(res=>{
      setPost(res.data[0]);
    })
    .catch(err=>console.log(err));
  }, []);

  return (
		<Container maxWidth="sm">
			<PostWrapper>
				<h2>{post.title}</h2>
				<Wrapper>
					<Date>{dayjs(post.date).format("YYYY년 MM월 DD일 HH:mm")}</Date>
					<div>
						<EditButton
							onClick={() => window.location.href="/write/"+id}
						>
							수정
						</EditButton>
						<EditButton>
							삭제
						</EditButton>
					</div>
				</Wrapper>
				<Line/>
				<ContentWrapper>{post.content}</ContentWrapper>
				<Line/>
				<CommentList id={id} post={post}/>
			</PostWrapper>
		</Container>
  )
}

export default ReadPost;