import { GetFeedResponseInterface } from "src/shared/components/feed/types/getFeedResponse.interface";
import { httpService } from "src/shared/services/http/http.service";
import { config } from "src/environment/config";

export class FeedService {
  getFeed(url: string) {
    const fullUrl = config.apiUrl + url;

    return httpService.get<GetFeedResponseInterface>(fullUrl);
  }
}

export const feedService = new FeedService();
