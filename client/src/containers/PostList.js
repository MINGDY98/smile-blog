import React from 'react';
import axios from 'axios';
import styled from "styled-components"
import { PrimaryButton} from '../styles/common';
import Post from '../components/Post';
import Pagination from '../components/Pagination';
import {Button, Dialog,DialogActions,DialogTitle,DialogContentText,DialogContent}from '@mui/material';

const PostListWrapper = styled.div`
  margin          : 24px 0px 24px 0px;
`

const PostWrapper = styled.div`
  display					: flex;
`

const DisabledButton = styled(PrimaryButton)`
  background-color: #fff;

`
const PostList = () => {

  const [posts, setPosts]=React.useState([]);
	const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(5);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [checkedList, setCheckedLists] = React.useState([]);
  const [openAlert, setOpenAlert] = React.useState(false);

  const callApi = async()=>{
    const res = await axios.get('http://localhost:4000/postList');
    return res.data
  }

  React.useEffect(()=>{
    callApi()
    .then(res => {
      setPosts(res.data)
    })
    .catch(err=>{
      console.log(err)
    });
  }, []);

	const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  const onCheckedElement = React.useCallback(
    (checked, id) => {
      if (checked) {
        setCheckedLists([...checkedList, id]);
      } else {
        setCheckedLists(checkedList.filter((el) => el !==id));//id가 아닌거로만 배열다시만듦.
      }
    },
    [checkedList]
  );

  const handleDelete = (e) => {
    e.preventDefault();
    checkedList.forEach((el)=>{
      axios.delete('http://localhost:4000/delete/post/'+el) 
      .then(function ( response ) { 
        console.log( response ); 
      }) 
      .catch(error => { 
        console.log( 'error : ',error.response ) 
      });
    })
    window.location.reload();
  }

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

	const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <div>
      <div>
        <PrimaryButton onClick={() => setOpenDelete(!openDelete)}>
          {openDelete? <div>선택 취소</div> : <div>목록 선택</div>}
        </PrimaryButton>
        {openDelete&&checkedList.length>0 ? 
        <PrimaryButton onClick={handleOpenAlert}>삭제</PrimaryButton>:
        <DisabledButton disabled>삭제</DisabledButton>}
      </div>
      {posts ?  
      <PostListWrapper>
        {currentPosts(posts).map((post,index)=>(
          <PostWrapper key={index}>
            {openDelete ?             
            <input
              id={post.idpost}
              type="checkbox"
              onChange={(e) => onCheckedElement(e.target.checked, post.idpost)}
              checked={checkedList.includes(post.idpost) ? true : false}
            /> : <></>}
            <Post 
              data = {post} 
            />
          </PostWrapper>
        ))} 
        <Pagination 
          postsPerPage={postsPerPage}
          totalPosts={posts.length} 
          paginate={setCurrentPage}
        ></Pagination>
      </PostListWrapper> :
      <div>새 글을 작성해주세요.</div>}
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
    </div>
    
  )
}
export default PostList;