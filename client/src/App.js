
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import NavigationBar from './containers/NavigationBar';
import Container from '@material-ui/core/Container';
function App() {
  return (
    <div >
      <Container maxWidth="sm">
        <NavigationBar/>
      </Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
