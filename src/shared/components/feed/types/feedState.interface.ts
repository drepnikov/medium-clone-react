import { GetFeedResponseInterface } from "src/shared/components/feed/types/getFeedResponse.interface";

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetFeedResponseInterface | null;
}
