import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { getFilms } from "./Actions/Films.js";
import { login } from "./Actions/User";
import { connect } from "react-redux";

//IMPORT COMPONENT
import FilmDetail from "./Layout/FilmDetail";
import HomeLayout from "./Layout/Home";
import Header from "./Containers/Header";
import Dialog from "./Containers/Dialog";
import Footer from "./Components/Footer";
import CheckoutLayout from "./Layout/CheckoutLayout";
import CheckoutAuth from "./Auth/CheckoutAuth";

function App(props) {
  useEffect(() => {
    props.getFilms();
    localStorage.getItem("user") &&
      props.getUser(JSON.parse(localStorage.getItem("user")));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Switch>
        <CheckoutAuth
          path="/checkout/:maLichChieu" exact
          component={CheckoutLayout}
        />
        <Route path="/Booking-Movies-ReactJS">
          <Route path="/Booking-Movies-ReactJS" exact component={Header} />
          <main className="main">
            <Switch>
              <Route path="/Booking-Movies-ReactJS" exact component={HomeLayout} />
              <Route path="/Booking-Movies-ReactJS/phim/:bidanh" exact component={FilmDetail} />
            </Switch>
          </main>
          <Dialog />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    getFilms: () => dispatch(getFilms()),
    getUser: user => dispatch(login(user))
  };
};

export default connect(null, mapDispatchToProps)(App);
