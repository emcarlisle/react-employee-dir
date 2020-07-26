import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";

// returns the Container components that have the navbar, table components and API call
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Container}/>
      </div>
    </Router>
  )
}

export default App;