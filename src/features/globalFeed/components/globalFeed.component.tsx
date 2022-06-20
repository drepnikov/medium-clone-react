import * as React from "react";
import { FeedComponent } from "src/shared/components/feed/feed.component";

interface IGlobalFeedComponentProps {}

const GlobalFeedComponent: React.FC<IGlobalFeedComponentProps> = () => {
  return (
    <div>
      <div>Я - глобал фид</div>
      <FeedComponent />
    </div>
  );
};

export { GlobalFeedComponent };
