import React from "react";
import { Route, Switch } from "react-router-dom";

import DemoPage from '../Pages/Demo/DemoPage'
import Register from '../Pages/Authorization/Register'
import Login from '../Pages/Authorization/Login'

const Routes = () => {
    return (
        <React.Fragment>

            <Switch>
                <Route exact path="/users" component={DemoPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />

            </Switch>
        </React.Fragment>
    );
}



export default Routes;
