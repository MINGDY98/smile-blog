import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components"
import Container from '@material-ui/core/Container';

export const PostWrapper = styled.div`
  border          : 1px solid #46508c;
  border-radius   : 5px;
  padding         : 15px;
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
				{post.content}
			</PostWrapper>
		</Container>
  )
}

export default ReadPost;