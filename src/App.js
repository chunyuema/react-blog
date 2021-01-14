import Navbar from './Navbar'; 
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        {/* always show nav bar */}
        <Navbar /> 
        <div className="content">
          {/* switch among different routes using switch */}
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/create'><Create  /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
