import React from "react";
import rightPNG from "../Assets/arrow.png";
import leftPNG from "../Assets/Left.png";

function Pagination({ currentPage, totalPages, onPageChange }) {
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
    const totalPagesToShow = 10;
    const startPage = Math.floor((currentPage - 1) / totalPagesToShow) * totalPagesToShow + 1;
    const endPage = Math.min(startPage + totalPagesToShow - 1, totalPages);

    if (startPage > 1) {
      pageNumbers.push(
        <div className="page-number ellipsis" key="ellipsis-left" onClick={goToPreviousPage}>
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
        <div className="page-number ellipsis" key="ellipsis-right" onClick={goToNextPage}>
          ...
        </div>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination-container">
      <div
        onClick={goToPreviousPage}
        className={`pagination-arrow ${currentPage === 1 ? "disabled" : ""}`}
      >
        <img src={leftPNG} alt="Previous" />
      </div>
      {renderPageNumbers()}
      <div
        className={`pagination-arrow ${currentPage === totalPages ? "disabled" : ""}`}
        onClick={goToNextPage}
      >
        <img src={rightPNG} alt="Next" />
      </div>
    </div>
  );
}

export default Pagination;
