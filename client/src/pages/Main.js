import React from 'react';
import styled from "styled-components";
import {
	Container
} from '@mui/material';
import {
	Padding
} from '../styles/common';
import PostList from '../containers/PostList';
import Profile from '../components/Profile';

const ProfileWrapper = styled.div`
	display					: flex;
	justify-content	: center;
`

const Main = () => {

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