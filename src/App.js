import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51HQAW8LAQYMRO8O5FyZjPiGfWym9uaRhXiakkkPqs4wntnt5JfQifStlVGyrXYVaakljM2i1FMLNCHZhz8rFKmcy00GNYCnjMC"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  //code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is login
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //any clean up operation go in
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
