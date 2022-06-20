import { Fragment } from "react";
import { Route } from "react-router-dom";
import { GlobalFeedComponent } from "src/features/globalFeed/components/globalFeed.component";

class GlobalFeedFeature {
  static PATHS = {
    feed: "/",
  };

  getRouter() {
    return (
      <Fragment key={"feed"}>
        <Route
          path={GlobalFeedFeature.PATHS.feed}
          element={<GlobalFeedComponent />}
        />
      </Fragment>
    );
  }
}

export const globalFeedFeature = new GlobalFeedFeature();
