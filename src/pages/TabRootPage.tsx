import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
} from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import {
  homeOutline,
  informationCircleOutline,
  personCircleOutline,
} from "ionicons/icons";
import NavTabButton from "../components/NavTabButton";
import TabPage from "./TabPage";

const TabRootPage: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/home" />
        <Route
          path="/tabs/home"
          render={(props) => <TabPage pageName="Home" {...props} />}
          exact={true}
        />
        <Route
          path="/tabs/info"
          render={(props) => <TabPage pageName="Info" {...props} />}
          exact={true}
        />
        <Route
          path="/tabs/about"
          render={(props) => <TabPage pageName="About" {...props} />}
          exact={true}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <NavTabButton icon={homeOutline} label="Home" />
        </IonTabButton>
        <IonTabButton tab="info" href="/tabs/info">
          <NavTabButton icon={informationCircleOutline} label="Info" />
        </IonTabButton>
        <IonTabButton tab="about" href="/tabs/about">
          <NavTabButton icon={personCircleOutline} label="About" />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabRootPage;
