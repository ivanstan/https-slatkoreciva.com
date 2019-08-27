import React, {Component} from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Home} from "./pages/home";
import styled from "styled-components";

const Main = styled.main`
  flex: 1 0 auto;
`;

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Main>
          <Route path="/" exact component={Home} />
        </Main>
        <Footer />
      </Router>
    );
  }
}
