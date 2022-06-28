import * as React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "src/environment/paths";
import { useGetFeedEffect } from "src/shared/components/feed/hooks/useGetFeedEffect";

interface IFeedComponentProps {
  url: string;
}

const FeedComponent: React.FC<IFeedComponentProps> = ({ url }) => {
  const { feed, isLoading, isError } = useGetFeedEffect(url);

  if (isLoading) return <div>Загружаем фид...</div>;
  if (isError) return <div>Ошибка при загрузке фида</div>;
  if (feed)
    return (
      <div>
        {feed.articles.map((article) => {
          return (
            <div key={article.createdAt} className={"article-preview"}>
              <div className={"article-meta"}>
                <Link to={PATHS.profile(article.author.username)}>
                  <img alt={"avatar"} src={article.author.image} />
                </Link>

                <div className={"info"}>
                  <Link to={PATHS.profile(article.author.username)}>
                    {article.author.username}
                  </Link>
                  <span className={"date"}>{article.createdAt}</span>
                </div>
                <div className={"pull-xs-right"}>ADD TO FAVORITES</div>
              </div>
              <Link to={PATHS.article(article.slug)} className={"preview-link"}>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                todo: !!HERE IS LIST OF TAGS!!
              </Link>
            </div>
          );
        })}
        todo: !!HERE IS PAGINATION!!
      </div>
    );

  return <div>Не предвиденное поведение</div>;
};

export { FeedComponent };
