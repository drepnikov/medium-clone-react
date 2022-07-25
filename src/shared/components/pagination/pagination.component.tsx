import * as React from "react";
import { UtilsService } from "src/shared/services/utils/utils.service";
import { Link } from "react-router-dom";
import { parseUrl, stringify } from "query-string";

interface IPaginationComponentProps {
  total: number;
  limit: number;
  url: string;
  currentPage: number;
}

const PaginationComponent: React.FC<IPaginationComponentProps> = ({
  total,
  url,
  limit,
  currentPage,
}) => {
  const pagesCount = Math.ceil(total / limit);

  const range = UtilsService.createRange(1, pagesCount);

  return (
    <ul className={"pagination"}>
      {range.map((page) => {
        const currentUrl = parseUrl(url);

        const urlWithPageQuery = stringify({
          ...currentUrl.query,
          page,
        });

        return (
          <li
            key={page}
            className={"page-item" + (page === currentPage ? " active" : "")}
          >
            <Link
              className={"page-link"}
              to={{ pathname: currentUrl.url, search: urlWithPageQuery }}
            >
              {page}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { PaginationComponent };
