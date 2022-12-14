import logo from "./logo.svg";
import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={MainPageComponent} />
        <Route exact={true} path="/products/:id" component={ProductPage} />
        <Route exact={true} path="/upload" component={UploadPage} />
      </Switch>
    </div>
  );
}

export default App;
