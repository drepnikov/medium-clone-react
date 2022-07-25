import { useLocation } from "react-router-dom";
import { parseUrl } from "query-string";

export const useURL = () => {
  const { pathname, search } = useLocation();
  const parsed = parseUrl(pathname + search);

  return {
    full: pathname + search,
    queryString: search,

    url: parsed.url,
    query: parsed.query,
  };
};
