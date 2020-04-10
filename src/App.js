import React from 'react';
import './App.css';
import bookList from "./components/bookList";
import addBook from "./components/addBook";
import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";

function App() {
  return (
      <div className="App">

        <BrowserRouter>
          <nav>
            <NavLink to="/">Book List</NavLink>
            ----------
            <NavLink to="/add-book">Add Book</NavLink>
          </nav>
          <Switch>
            <div>
              <Route exact path="/" component={bookList}/>
              <Route path="/add-book" component={addBook}/>
            </div>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
