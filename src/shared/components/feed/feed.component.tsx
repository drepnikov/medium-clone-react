import * as React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "src/environment/paths";
import { useGetFeed } from "src/shared/components/feed/hooks/useGetFeed.hook";
import { ErrorMessageComponent } from "src/shared/components/errorMessage/errorMessage.component";
import { LoadingComponent } from "src/shared/components/loading/loading.component";
import { config } from "src/environment/config";
import { useURL } from "src/shared/hooks/useURL.hook";
import { PaginationComponent } from "src/shared/components/pagination/pagination.component";
import { parseUrl, stringify } from "query-string";

interface IFeedComponentProps {
  apiUrl: string;
}

const FeedComponent: React.FC<IFeedComponentProps> = ({ apiUrl }) => {
  const currentURL = useURL();
  const currentPage = Number(currentURL.query["page"]) || 1;

  const parsedApiUrl = parseUrl(apiUrl);
  const stringifiedQueryParams = stringify({
    limit: config.limit,
    offset: config.limit * (currentPage - 1),
    ...parsedApiUrl.query,
  });

  const apiUrlWithQueryParams = `${parsedApiUrl.url}?${stringifiedQueryParams}`;

  const { feed, isLoading, isError } = useGetFeed(apiUrlWithQueryParams);

  if (isLoading) return <LoadingComponent />;
  if (isError) return <ErrorMessageComponent />;
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

        <PaginationComponent
          total={feed.articlesCount}
          limit={config.limit}
          url={currentURL.full}
          currentPage={currentPage}
        />
      </div>
    );

  return <div>Не предвиденное поведение</div>;
};

export { FeedComponent };
