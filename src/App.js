import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Error from "./components/Error";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SearchRepo from "./components/SearchRepo";
import SearchUser from "./components/SearchUser";
import { useGlobalContext } from "./utils/context";

function App() {
    const consumer = useGlobalContext();
    console.log(consumer);
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/search-user">
                    <SearchUser />
                </Route>
                <Route path="/search-repo">
                    <SearchRepo />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
