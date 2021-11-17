import React, { useContext, useEffect } from "react";
import { HomePage } from "../pages/HomePage";
import { PokedexPage } from "../pages/PokedexPage";
import { DetailsPage } from "../pages/DetailsPage";
import { AboutPage } from "../pages/AboutPage";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";


export const Router = () => {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route exact path={"/pokedex"}>
                    <PokedexPage />
                </Route>
                <Route exact path={"/details/:name"}>
                    <DetailsPage />
                </Route>
                <Route exact path={"/about"}>
                    <AboutPage />
                </Route>
                <Route exact path={'/battle/:name'}>
                    <BattlePage />
                </ Route>
                <Route path={'*'}>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}