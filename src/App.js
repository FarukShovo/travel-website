import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Packages from "./components/Packages/Packages";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Booking from "./components/Booking/Booking";
import Review from "./components/Review/Review";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import AddService from "./components/AddService/AddService";

import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./components/Details/Details";
import MyOrder from "./components/MyOrder/MyOrder";
import ManageServices from "./components/ManageServices/ManageServices";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/packages">
            <Packages></Packages>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/gallery">
            <Gallery></Gallery>
          </Route>
          <Route exact path="/booking">
            <Booking></Booking>
          </Route>
          <Route exact path="/myOrder">
            <MyOrder></MyOrder>
          </Route>

          <Route exact path="/review">
            <Review></Review>
          </Route>
          <Route exact path="/manageServices">
            <ManageServices></ManageServices>
          </Route>
          <Route exact path="/addService">
            <AddService></AddService>{" "}
          </Route>
          <PrivateRoute path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          {/* <Route exact path="/signup"></Route> */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
