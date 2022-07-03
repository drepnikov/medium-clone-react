import * as React from "react";

interface IBannerComponentProps {}

const BannerComponent: React.FC<IBannerComponentProps> = () => {
  return (
    <div className={"banner"}>
      <div className={"container"}>
        <h1>Medium Clone</h1>
        <p>A place to share knowledge</p>
      </div>
    </div>
  );
};

export { BannerComponent };
