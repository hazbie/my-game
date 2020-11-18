import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadPage from './loadPage/LoadPage';
import GamePage from './gamePage/GamePage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>CardGame</title>
      </Helmet>
      <Router>
        <Route exact path="/" component={LoadPage} />
        <Route path="/play-game" component={GamePage} />
      </Router>
    </div>
  );
}

export default App;
