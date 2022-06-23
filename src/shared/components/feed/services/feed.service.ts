import { GetFeedResponseInterface } from "src/shared/components/feed/types/getFeedResponse.interface";
import { httpService } from "src/shared/services/http/http.service";
import { environment } from "src/config/environment";

export class FeedService {
  getFeed(url: string) {
    const fullUrl = environment.apiUrl + url;

    return httpService.get<GetFeedResponseInterface>(fullUrl);
  }
}

const feedService = new FeedService();
