import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './components/context/AuthProvider';
import SingleFoodDetails from './components/Home/SingleFoodDetails/SingleFoodDetails';
import OrderReview from './components/Home/OrderReview/OrderReview';
import Shipping from './components/Home/Shipping/Shipping';
import Banner from './components/Home/Banner/Banner';
import Footer from './components/Footer/Footer';
import Foods from './components/Home/Foods/Foods';
import Login from './components/authentication/Login/Login';
import Register from './components/authentication/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ReadMore from './components/Home/ReadMore/ReadMore';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/banner">
              <Banner />
            </Route>
            <Route path="/food">
              <Foods />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/read-more/:id">
              <ReadMore />
            </PrivateRoute>
            <PrivateRoute path="/single-food-details/:foodId">
              <SingleFoodDetails />
            </PrivateRoute>
            <PrivateRoute path="/order-review">
              <OrderReview />
            </PrivateRoute>
            <PrivateRoute path="/shipping">
              <Shipping />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
