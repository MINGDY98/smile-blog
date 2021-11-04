import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components"
import {
	Container,
	Button, 
	Dialog,
	DialogActions,
	DialogTitle,
	DialogContentText,
	DialogContent
}from '@mui/material';
import dayjs from 'dayjs';
import CommentList from '../containers/CommentList';

const PostWrapper = styled.div`
  min-height      : 600px;
`

const Line = styled.hr`
  margin          : 16px 0px;
  border          : 0;
  height          : 1px;
  background-color: #46508c;
`

const Date = styled.div`
  display         : inline-block;
  font-size       : 12px;
  color           : #888888;
`

const EditButton = styled.button`
  border          : none;
  background      : none;
  display         : inline-block;
  cursor          : pointer;
  font-size       : 12px;
  color           : #888888;
`

const Wrapper = styled.div`
  display         : flex;
  justify-content : space-between;
  align-items     : center;
`

const ContentWrapper = styled.div`
  min-height      : 250px;
`

const Title = styled.h1`
  margin          : 0px;
  color           : #333333;
  margin-bottom   : 12px;
`

const Content = styled.p`
  font-size       : 16px;
  font-weight     : 500;
  color           : #565656;
`

const ReadPost = () => {

  const { id } = useParams();
  const [openAlert, setOpenAlert] = React.useState(false);
  const [post, setPost] = React.useState([]);
  const callPostApi = async()=>{
    const response = await axios.get('http://localhost:4000/post/read/'+ id);
    return response.data;
  }

  React.useEffect(()=>{
    callPostApi()
    .then(res=>{
      setPost(res.data[0]);
    })
    .catch(err=>console.log(err));
  }, []);

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/post/delete/'+id) 
    .then(function ( response ) { 
      console.log( response ); 
      window.location.href="/";
    }) 
    .catch(error => { 
      console.log( 'error : ',error.response ) 
    });
  }

  return (
    <Container maxWidth="md">
      <PostWrapper>
        <Title>{post.title}</Title>
        <Wrapper>
          <Date>{dayjs(post.date).format("YYYY년 MM월 DD일 HH:mm")}</Date>
          <div>
            <EditButton
              onClick={() => window.location.href="/write/"+id}
            >
              수정
            </EditButton>
            <EditButton onClick={handleOpenAlert}>
              삭제
            </EditButton>
          </div>
        </Wrapper>
        <Line/>
        <ContentWrapper>
        {post.content&&post.content.split("\n").map((line) => { //this.props.data.content: 내용
            return (
              <Content >
                {line}
                <br/>
              </Content >
            );
          })}
        </ContentWrapper>
        <Line/>
        <CommentList id={id} post={post}/>
        <Dialog
          open={openAlert}
          onClose={handleCloseAlert}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          >
          <DialogTitle id="alert-dialog-title">
            {"포스트 삭제"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              정말 글을 삭제하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAlert}>아니오</Button>
            <Button onClick={handleDelete} autoFocus>네</Button>
          </DialogActions>
        </Dialog>
      </PostWrapper>
    </Container>
  )
}

export default ReadPost;