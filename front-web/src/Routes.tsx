import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";

function Routes() {

    return (
        <BrowserRouter>
        <Navbar/>
            <Switch>
                <Route path="/" exact component={Home} />

                <Route path="/orders" component={Orders}>

                </Route>
            </Switch>

        </BrowserRouter>
    )



}

export default Routes;