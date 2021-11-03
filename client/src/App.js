
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from "styled-components";
import { Container } from '@mui/material';
import Main from './pages/Main';
import WritePost from './pages/WritePost';
import ReadPost from './pages/Readpost';
import NavigationBar from './containers/NavigationBar';

export const Padding = styled.div`
	padding-top : 30px;
`

function App() {
  
  return (
    <div >
      <Container maxWidth="md">
        <NavigationBar/>
      </Container>
      <Padding/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/write/:id" component={WritePost}/>
          <Route exact path="/write" component={WritePost}/>
          <Route exact path="/read/:id" component={ReadPost}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
