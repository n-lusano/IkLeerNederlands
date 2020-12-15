import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Info: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Info & Disclaimer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className="ionCard">
          <IonCardHeader>
            <IonCardTitle>What this is</IonCardTitle>
            <IonCardSubtitle>and what it's not</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItem lines="none" color="none">
              Meaning that no, I am not a teacher, and yes I need all the help I
              can get, especially from native speakers and other linguistics
              enthusiasts. At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium voluptatum deleniti atque
              corrupti quos dolores et quas molestias excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
              quidem rerum facilis est et expedita distinctio. Nam libero
              tempore, cum soluta nobis est eligendi optio cumque nihil impedit
              quo minus id quod maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
              et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
              et voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Info;
