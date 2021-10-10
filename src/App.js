import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
