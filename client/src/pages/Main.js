import React from 'react';
import Profile from '../components/Profile';
import Container from '@material-ui/core/Container';
import styled from "styled-components";
import PostList from '../containers/PostList';
import { Padding } from '../styles/common';

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
			<Padding/>
			<PostList/>
		</Container>
  )
}
export default Main;