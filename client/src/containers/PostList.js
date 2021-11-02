import React from 'react';
import axios from 'axios';
import styled from "styled-components"
import { PrimaryButton} from '../styles/common';
import Post from '../components/Post';
import Pagination from '../components/Pagination';


const PostListWrapper = styled.div`
  margin          : 24px 0px 24px 0px;
`

const PostWrapper = styled.div`
  display					: flex;
`

const PostList = () => {

  const [posts, setPosts]=React.useState([]);
	const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(5);
  const [openDelete, setOpenDelete] = React.useState(false);

  const [checkedList, setCheckedLists] = React.useState([]);
  const onCheckedElement = React.useCallback(
    (checked, id) => {
      if (checked) {
        setCheckedLists([...checkedList, id]);
      } else {
        setCheckedLists(checkedList.filter((el) => el !==id));//id가 아닌거로만 배열다시만듦.
      }
      console.log(checkedList);
    },
    [checkedList]
  );

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

  return (
    <div>
      <div>
        <PrimaryButton onClick={() => setOpenDelete(!openDelete)}>
          게시글 삭제
        </PrimaryButton>
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
    </div>
    
  )
}
export default PostList;