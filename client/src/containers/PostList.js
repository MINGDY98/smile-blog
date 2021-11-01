import React from 'react';
import axios from 'axios';
import Post from '../components/Post';
import Pagination from '../components/Pagination';
const PostList = () => {

  const [posts, setPosts]=React.useState([]);
	const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(5);

  const callApi = async()=>{
    const res = await axios.get('http://localhost:4000/post');
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
			{currentPosts(posts).map((post,index)=>(
				<Post key={index}
					data = {post} 
				/>
			))} 
			<Pagination 
				postsPerPage={postsPerPage}
				totalPosts={posts.length} 
				paginate={setCurrentPage}
			></Pagination>
    </div>
  )
}
export default PostList;