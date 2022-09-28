
import { BrowserRouter,Route, Switch } from 'react-router-dom';
// styles 
import './App.css';

// pages and componenets 

import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <div className='container'> 
          <Switch>
            <Route exact path = '/'>
              <Dashboard />
            </Route>
            <Route exact path = '/create'>
              <Create />
            </Route>
            <Route exact path = '/login'>
              <Login />
            </Route>
            <Route exact path = '/signup'>
              <Signup />
            </Route>
            <Route exact path = '/projects/:id'>
              <Project />
            </Route>
          </Switch>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


