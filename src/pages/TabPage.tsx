import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { pagesList } from "./TabPages";

interface PageProps {
  pageName: string | undefined;
}

const pages = pagesList;

const TabPage: React.FC<PageProps> = ({ pageName }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{pageName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      {pages.map(
        (page, index) =>
          pageName === page.name && (
            <IonContent key={index}>{page.content}</IonContent>
          )
      )}
    </IonPage>
  );
};

export default TabPage;
