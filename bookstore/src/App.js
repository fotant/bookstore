import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import SearchPage from "./pages/SearchPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import BookCreationPage from "./pages/BookCreationPage";

import "./App.scss";


function App() {
 
    return (
      <div className="App">
        <header className="d-flex align-items-center justify-content-center mb-5">Bookstore</header>
        <Router>
            <Switch>
                <Route path="/" exact component={SearchPage} />
                <Route path="/book/:isbn" exact component={BookDetailsPage} />
                <Route path="/create-book" exact component={BookCreationPage} />
            </Switch>
        </Router>
        <footer className="d-flex align-items-center justify-content-center mt-5"></footer>
      </div>
      
    );
  
 
}

export default App;
