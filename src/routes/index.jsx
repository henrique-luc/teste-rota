import { Route, Switch } from "react-router-dom";
import { RomanNumbers } from "../pages/RomanNumbers";
import { CommandCalculator } from "../pages/CommandCalculator";
import { GameOfLife } from "../pages/GameOfLife";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={RomanNumbers} />
    <Route exact path="/command-calculator" component={CommandCalculator} />
    <Route exact path="/game-of-life" component={GameOfLife} />
  </Switch>
);
