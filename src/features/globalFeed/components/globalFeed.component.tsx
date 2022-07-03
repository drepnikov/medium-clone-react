import * as React from "react";
import { FeedComponent } from "src/shared/components/feed/feed.component";
import { BannerComponent } from "src/shared/components/banner/banner.component";

interface IGlobalFeedComponentProps {}

const API_URL = "/articles";

const GlobalFeedComponent: React.FC<IGlobalFeedComponentProps> = () => {
  return (
    <div className={"home-page"}>
      <BannerComponent />
      <div className={"container page"}>
        <div className={"row"}>
          <div className={"col-md-9"}>
            todo: !!HERE IS TOGGLER
            <FeedComponent url={API_URL} />
          </div>
          <div className={"col-md-3"}>todo: !!HERE IS POPULAR TAGS!!</div>
        </div>
      </div>
    </div>
  );
};

export { GlobalFeedComponent };
