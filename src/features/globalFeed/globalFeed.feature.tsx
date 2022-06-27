import { Fragment } from "react";
import { Route } from "react-router-dom";
import { GlobalFeedComponent } from "src/features/globalFeed/components/globalFeed.component";
import { FeatureInterface } from "src/types";
import { PATHS } from "src/environment/paths";

class GlobalFeedFeature implements FeatureInterface {
  router() {
    return (
      <Fragment key={"feed"}>
        <Route path={PATHS.feed} element={<GlobalFeedComponent />} />
      </Fragment>
    );
  }
}

export const globalFeedFeature = new GlobalFeedFeature();
