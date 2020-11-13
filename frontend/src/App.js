import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTE_HOME } from './constants/routes';
import Container from './components/HomeContainer/homeCointainer';
import HomePage from './components/Home/home';

const App = () => {
   return (
      <Container>
         <Switch>
            <Route path={ROUTE_HOME} component={HomePage} />
         </Switch>
      </Container>
   )
}

export default App
