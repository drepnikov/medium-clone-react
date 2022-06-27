import * as React from "react";
import { useEffect } from "react";
import { useAppDispatch } from "src/store/hooks/store.hook";
import { getFeedThunk } from "src/shared/components/feed/store/thunks/getFeed.thunk";
import {
  useFeedSelector,
  useErrorSelector,
  useIsLoadingSelector,
} from "src/shared/components/feed/store/selectors";
import { Link } from "react-router-dom";
import { PATHS } from "src/environment/paths";

interface IFeedComponentProps {
  url: string;
}

const FeedComponent: React.FC<IFeedComponentProps> = ({ url }) => {
  const feed = useFeedSelector();
  const isError = useErrorSelector();
  const isLoading = useIsLoadingSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFeedThunk({ url }));
  }, [dispatch, url]);

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
