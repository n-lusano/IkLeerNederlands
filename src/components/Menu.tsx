import React, { Fragment } from "react";
import {
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle,
  IonLabel,
  IonListHeader,
} from "@ionic/react";
import { useLocation } from "react-router-dom";

interface MenuTopic {
  title: string;
  url: string;
  icon?: string;
}

interface MenuItem {
  header?: string;
  items: MenuTopic[];
}

const menuItems: MenuItem[] = [
  {
    header: "Verbs",
    items: [
      {
        title: "Present simple",
        url: "/learn/present-simple",
      },
      {
        title: "Present continuous",
        url: "/learn/present-continuous",
      },
    ],
  },
  {
    header: "Adjectives",
    items: [
      {
        title: "Adjectives",
        url: "/learn/adjectives",
      },
      {
        title: "Predicate adjectives",
        url: "/learn/predicate-adjectives",
      },
    ],
  },
  {
    items: [
      {
        title: "Home",
        url: "/tabs",
        icon: "homeOutline",
      },
    ],
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="menuItems">
          {menuItems.map((menuItem, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                {menuItem.header && (
                  <IonListHeader lines="inset">{menuItem.header}</IonListHeader>
                )}
                {menuItem.items.map((menuTopic, index) => {
                  return (
                    <IonItem
                      key={index}
                      className={
                        location.pathname === menuTopic.url ? "selected" : ""
                      }
                      routerLink={menuTopic.url}
                      routerDirection="none"
                      lines="none"
                      detail={false}
                    >
                      <IonLabel>{menuTopic.title}</IonLabel>
                    </IonItem>
                  );
                })}
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

// {menuTopic.icon && (
//   <IonIcon slot="start" icon={menuTopic.icon} />
// )}
