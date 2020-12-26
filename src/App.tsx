import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Page from "./pages/Page";
import TabRootPage from "./pages/TabRootPage";
import Menu from "./components/Menu";
import "./theme/generalStyling.tsx";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main" disabled={true}>
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/learn/:name" component={Page} exact />
          <Route path="/tabs" component={TabRootPage} />
          <Redirect from="/" to="/tabs" exact />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
