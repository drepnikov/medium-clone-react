import { ProfileInterface } from "src/shared/types/profile.interface";

export interface ArticleInterface {
  author: ProfileInterface;
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
}
