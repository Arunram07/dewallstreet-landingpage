import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./patterns/Footer";
import PrivaryNTerms from "./patterns/PrivaryNTerms";
import AboutScreen from "./screen/AboutScreen";
import GetFreeQuote from "./screen/GetFreeQuote";

import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import ServiceScreen from "./screen/ServiceScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/about" exact>
            <AboutScreen />
          </Route>
          <Route path="/products" exact>
            <ProductScreen />
          </Route>
          <Route path="/services" exact>
            <ServiceScreen />
          </Route>
          <Route path="/privacy_policy">
            <PrivaryNTerms />
          </Route>
          <Route path="/freeQuotes" exact>
            <GetFreeQuote />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
