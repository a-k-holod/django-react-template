import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

const Home = () => (
    <div>
      <h2>Welcome to the Homepage</h2>
      <p>This is the homepage of your Django-React app.</p>
    </div>
);

const Test = () => (
    <div>
      <h2>Test Page</h2>
      <p>This is a test page accessible at /test.</p>
    </div>
);

function App() {
  return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">Test Page</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/test" component={Test} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
  );
}

export default App;
