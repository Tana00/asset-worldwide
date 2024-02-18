import classnames from "classnames";
import { useCustomPagination, DOTS } from "@/hooks";

export const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    className,
  } = props;

  const paginationRange = useCustomPagination({
    currentPage,
    totalCount,
    pageSize: 3,
    siblingCount,
  });

  if (currentPage === 0) {
    // || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

  return (
    <div className="font-Avenir-Medium font-medium flex items-center md:justify-between justify-center w-11/12 mx-auto mb-5">
      <ul
        className={classnames("pagination-container", {
          [className]: className,
        })}
      >
        <li
          className={classnames(
            "pagination-item !border-0 disabled:!text-[#CCCCCC]",
            {
              disabled: currentPage === 1,
            }
          )}
          onClick={onPrevious}
        >
          <div>Prev</div>
        </li>
        {paginationRange &&
          paginationRange.map((pageNumber, i) => {
            if (pageNumber === DOTS) {
              return (
                <li key={i} className="pagination-item dots">
                  &#8230;
                </li>
              );
            }

            return (
              <li
                key={i}
                className={classnames("pagination-item", {
                  selected: pageNumber === currentPage,
                })}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })}
        <li
          className={classnames("pagination-item !border-none", {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div>Next</div>
        </li>
      </ul>
    </div>
  );
};
