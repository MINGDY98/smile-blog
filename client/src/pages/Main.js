import React from 'react';
import Profile from '../components/Profile';
import Container from '@material-ui/core/Container';
import styled from "styled-components";

const Main = () => {

	const ProfileWrapper = styled.div`
		display					: flex;
		justify-content: center;
	`
  return (
		<Container maxWidth="sm">
			<ProfileWrapper>
				<Profile/>
			</ProfileWrapper>
		</Container>
  )
}
export default Main;