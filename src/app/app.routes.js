import React from 'react';
import { Route, Switch } from 'react-router';
import AppComponent from "./app.component";
import { HomeContainer } from "./home/home.container"
import {ElementContainer} from "./element/element.container";

export const AppRoutes = () => (
    <AppComponent>
        <Switch>
            <Route component={HomeContainer} exact path="/" />
            <Route component={ElementContainer} path="/element/edit/:elementId" />
            <Route component={ElementContainer} path="/element/add" />
        </Switch>
    </AppComponent>
);