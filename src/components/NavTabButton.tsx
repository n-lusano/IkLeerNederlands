import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { IonIcon, IonLabel } from "@ionic/react";

interface NavTabButtonProps {
  icon: string;
  label: string;
}

const NavTabButton: React.FC<NavTabButtonProps> = (props) => {
  const { icon, label } = props;
  const isXsSm = useMediaQuery({ minWidth: 0, maxWidth: 767 });

  return (
    <Fragment>
      <IonIcon icon={icon} size={(isXsSm && "large") || "default"} />
      <IonLabel className="ion-hide-md-down">{label}</IonLabel>
    </Fragment>
  );
};

export default NavTabButton;
