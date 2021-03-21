import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';
import SearchRider from './components/SearchRider/SearchRider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [ride, setRide] = useState({});
  const value = {
    loggedInUser, 
    setLoggedInUser,
    ride,
    setRide,

  }
  return (
    <userContext.Provider value={value}>
      <Router>
          <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>

          

          <Route path="/:vehicleId">
            <SearchRider></SearchRider>
          </Route>

          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}
export default App;
