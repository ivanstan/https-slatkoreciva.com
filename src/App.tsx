import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import styled, { ThemeProvider } from "styled-components";
import BlogPost from "./pages/BlogPost";

const Main = styled.main`
  flex: 1 0 auto;
`;

const theme = {
    defaultBrand: '#f3e3de',
    darkBrand: '#E4C7BD',
};

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router>
                    <Header/>
                    <Main>
                        <Route path="/" exact component={Home}/>
                        <Route path="/post/:id" exact component={BlogPost}/>
                    </Main>
                    <Footer/>
                </Router>
            </ThemeProvider>
        );
    }
}
