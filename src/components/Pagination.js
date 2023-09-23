function Pagination({ totalPages, currentPage, onPageChange }) {
    const maxPageButtons = 5; // Adjust this value as needed
  
    // Calculate the range of page buttons to display
    const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
  
    // Generate an array of page numbers within the current range
    const pageNumbers = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  
    return (
      <div className="pagination">
        {currentPage > 1 && (
          <button
            className="previous"
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={pageNumber === currentPage ? "activebtn" : "page"}
          >
            {pageNumber}
          </button>
        ))}
        {currentPage < totalPages && (
          <button className="next" onClick={() => onPageChange(currentPage + 1)}>
            Next
          </button>
        )}
      </div>
    );
  }