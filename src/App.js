import React from "react"
import { Route, Switch } from "react-router-dom"
import Card from "./components/card"
import CreateCard from "./components/createCard"

function App() {
    return (
        <Switch>
            <Route path={"/createCard"} component={CreateCard} />
            <Route path={"/"} component={Card} />
        </Switch>
    )
}

export default App
