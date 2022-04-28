import React from "react";
import "./pagination.css";

const Pagination = ({
  totalPage,
  currentPage,
  onClick,
}: {
  totalPage: number;
  currentPage: number;
  onClick: any;
}): JSX.Element => {
  return (
    <div className="pagination-wrapper">
      <button
        disabled={currentPage <= 1}
        onClick={() => {
          if (currentPage <= 1) {
            onClick(1);
          } else {
            const newCurrentPage = currentPage - 1;
            onClick(newCurrentPage);
          }
        }}
      >
        Previous
      </button>

      <button
        disabled={currentPage === totalPage}
        onClick={() => {
          if (currentPage === totalPage) {
            onClick(totalPage);
          } else {
            const newCurrentPage = currentPage + 1;
            onClick(newCurrentPage);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
