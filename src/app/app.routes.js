import React from 'react';
import { Route, Switch } from 'react-router';
import AppComponent from "./app.component";
import { HomeContainer } from "./home/home.container"

export const AppRoutes = () => (
    <AppComponent>
        <Switch>
            <Route component={HomeContainer} exact path="/" />
        </Switch>
    </AppComponent>
);