import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import MainPage from "./components/pages/Main";
import PageDiet from "./components/pages/Diet";
import PageTrainingPlan from "./components/pages/TrainingPlan";
import PagePersonalTraining from "./components/pages/PersonalTraining";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <div>
        <ScrollToTop>
          <Navigation />
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/plan-treningowy" component={PageTrainingPlan} />
            <Route
              path="/trening-personalny"
              component={PagePersonalTraining}
            />
            <Route path="/dieta" component={PageDiet} />
            <Route path="/polityka-prywatności" component={PrivacyPolicy} />
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
};

export default App;
