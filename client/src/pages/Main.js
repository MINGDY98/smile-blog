import React from 'react';
import Profile from '../components/Profile';
import Container from '@material-ui/core/Container';
import styled from "styled-components";
import PostList from '../containers/PostList';
const Main = () => {

	const ProfileWrapper = styled.div`
		display					: flex;
		justify-content	: center;
	`
  return (
		<Container maxWidth="sm">
			<ProfileWrapper>
				<Profile/>
			</ProfileWrapper>
			<PostList/>
		</Container>
  )
}
export default Main;