import React from "react";

export interface FeatureInterface {
  rootComponent?: React.FC<any>;
  router?: (...args) => JSX.Element;
}
