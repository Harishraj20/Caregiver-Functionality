import React from "react";

function Pagination({
  currentPage,
  totalPages = 10,
  onPageChange,
  firstIndex,
  lastIndex,
  totalRecords,
  name,
  searchval,totalValue,closeModal
}) {

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalPagesToShow = 5;
    const startPage =
      Math.floor((currentPage - 1) / totalPagesToShow) * totalPagesToShow + 1;
    const endPage = Math.min(startPage + totalPagesToShow - 1, totalPages);

    if (startPage > 1) {
      pageNumbers.push(
        <div
          className="page-number ellipsis"
          key="ellipsis-left"
          onClick={goToPreviousPage}
        >
          ...
        </div>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <div
          className={`page-number ${currentPage === i ? "active" : ""}`}
          key={i}
          onClick={() => onPageChange(i)}
        >
          {i}
        </div>
      );
    }

    if (endPage < totalPages) {
      pageNumbers.push(
        <div
          className="page-number ellipsis"
          key="ellipsis-right"
          onClick={goToNextPage}
        >
          ...
        </div>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination-holder">
      <div className={`pagination-container ${name}`}>
        {totalValue>10 ?
<div className="table-info">
          showing {firstIndex + 1} to {lastIndex} of {totalRecords} entries{" "}
          {searchval ? `(filtered from ${totalValue} total entries)` : ""}
        </div>:""
        }
        <div className="table-info">
          showing {firstIndex + 1} to {lastIndex} of {totalRecords} entries{" "}
          {searchval ? `(filtered from ${totalValue} total entries)` : ""}
        </div>
        {name == "activities" ? (
          <div className="back-btn">
            <button onClick={closeModal}>Back</button>
          </div>
        ) : (
          ""
        )}
        <div className="pagination-wrapper">
          <div
            onClick={goToPreviousPage}
            className={`pagination-arrow ${
              currentPage === 1 ? "disabled" : ""
            }`}
          >
            previous
          </div>

          {renderPageNumbers()}
          <div
            className={`pagination-arrow ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={goToNextPage}
          >
            {" "}
            next
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
