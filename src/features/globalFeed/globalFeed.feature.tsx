import { Fragment } from "react";
import { Route } from "react-router-dom";
import { GlobalFeedComponent } from "src/features/globalFeed/components/globalFeed.component";
import { PathsEnum } from "src/shared/types/paths.enum";
import { FeatureInterface } from "src/types";

class GlobalFeedFeature implements FeatureInterface {
  router() {
    return (
      <Fragment key={"feed"}>
        <Route path={PathsEnum.feed} element={<GlobalFeedComponent />} />
      </Fragment>
    );
  }
}

export const globalFeedFeature = new GlobalFeedFeature();
