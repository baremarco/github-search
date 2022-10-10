import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Error from "./components/Error";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SearchRepo from "./components/SearchRepo";
import SearchUser from "./components/SearchUser";
import "./config/axios";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Container fluid>
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
                    <Route path="/error">
                        <Error />
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
                <Footer>Copyright &copy; Website 2022</Footer>
            </Container>
        </BrowserRouter>
    );
}

export default App;
