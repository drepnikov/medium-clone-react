import { Route } from "react-router-dom";
import { GlobalFeed } from "src/features/globalFeed/components/globalFeed.component";

class GlobalFeedFeature {
  static PATHS = {
    feed: "/",
  };

  getRouter() {
    return (
      <>
        <Route path={GlobalFeedFeature.PATHS.feed} element={<GlobalFeed />} />
      </>
    );
  }
}

export const globalFeedFeature = new GlobalFeedFeature();
