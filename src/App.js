import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { Navigation } from "./components/Navigation";
import {Container, Row, Col} from 'reactstrap';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import AnnouncementBanner from "./components/AnnouncementBanner";

const App = () => {

  return (
    <Router>
      <Navigation/>
      <AnnouncementBanner title="Coming Soon!" details="(Limited orders available)" detailLink="https://www.facebook.com/Picky-Nickys-106097991002314/" classList="pink-banner"/>
      <Container fluid="md" style={{paddingBottom: "65px"}}>
        <Row>
          <Col>
            <Switch>
              <Router exact path="/PickyNickys">
                <Home />
              </Router>
              <Router path="/videos">
                <div style={{color: "var(--primary-dark)"}}>
                  <AnnouncementBanner title="This Page is Under Development" />
                </div>
              </Router>
              <Router path="/recipies">
                <div style={{color: "var(--primary-dark)"}}>
                  <AnnouncementBanner title="This Page is Under Development" />
                </div>
              </Router>
              <Router path="/order">
                <div style={{color: "var(--primary-dark)"}}>
                  <AnnouncementBanner title="This Page is Under Development" />
                </div>
              </Router>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
};


export default App;
