import { ArticleInterface } from "src/shared/types/article.interface";

export interface GetFeedResponseInterface {
  articles: ArticleInterface[];
  articlesCount: number;
}
