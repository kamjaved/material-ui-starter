import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../../utils/PrivateRoute";

import DemoPage from '../Pages/Demo/DemoPage'
import Register from '../Pages/Authorization/Register'
import Login from '../Pages/Authorization/Login'

const Routes = () => {
    return (
        <React.Fragment>

            <Switch>
                <PrivateRoute exact path="/users" component={DemoPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />

            </Switch>
        </React.Fragment>
    );
}



export default Routes;
