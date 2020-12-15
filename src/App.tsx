import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeOutline,
  personCircleOutline,
  informationCircleOutline,
} from "ionicons/icons";
import Learn from "./pages/Learn";
import About from "./pages/About";
import Info from "./pages/Info";
import NavTabButton from "./components/NavTabButton";
import "./theme/generalStyling.tsx";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/learn" component={Learn} exact={true} />
          <Route path="/info" component={Info} />
          <Route path="/about" component={About} exact={true} />
          <Route
            path="/"
            render={() => <Redirect to="/learn" />}
            exact={true}
          />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="learn" href="/learn">
            <NavTabButton icon={homeOutline} label="Learn" />
          </IonTabButton>
          <IonTabButton tab="info" href="/info">
            <NavTabButton icon={informationCircleOutline} label="Info" />
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <NavTabButton icon={personCircleOutline} label="About" />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
