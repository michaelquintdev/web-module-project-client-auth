import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to = '/'>Home</Link>
          </li>
          <li>
            <Link to = '/login'>Login</Link>
          </li>
          <li>
            <h4 onClick = {null} >Logout</h4>
          </li>
          <li>
            {localStorage.getItem('token') ? <Link to = '/friends'>Friends List</Link> : <div></div>}
          </li>
        </ul>

        <Switch>
          <Route exact path = '/friends'>
              <FriendsList />
            </Route>
          <Route path = '/login' component = {Login} />
          <Route component = {Home} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
