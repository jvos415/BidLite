import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/Splash/Splash";
import UserJobs from "./components/Jobs/UserJobs";
import BidMachine from "./components/BidMachine/BidMachine";
import FourOFour from "./components/404/FourOFour";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route exact path="/bidmachine">
            <BidMachine />
          </Route>
          <Route exact path="/jobs/:userId">
            <UserJobs />
          </Route>
          <Route path="">
          <FourOFour />
        </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
