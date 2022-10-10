import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/Splash/Splash";
import UserJobs from "./components/Jobs/UserJobs";
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
          <Route path="/bidmachine">
            <h1>Bid Machine Page</h1>
          </Route>
          <Route exact path="/jobs/:userId">
            <UserJobs />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
