import * as React from "react";
import { Feed } from "src/shared/components/feed/feed.component";

interface IGlobalFeedProps {}

const GlobalFeed: React.FC<IGlobalFeedProps> = () => {
  return (
    <div>
      <div>Я - глобал фид</div>

      <Feed />
    </div>
  );
};

export { GlobalFeed };
