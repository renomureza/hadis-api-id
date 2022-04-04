const paginate = (
  totalItems,
  currentPage = 1,
  pageSize = 10,
  maxPages = 10
) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  if (currentPage < 1) {
    // eslint-disable-next-line no-param-reassign
    currentPage = 1;
  } else if (currentPage > totalPages) {
    // eslint-disable-next-line no-param-reassign
    currentPage = totalPages;
  }

  let startPage;
  let endPage;
  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  const j = endPage + 1 - startPage;
  const initArr = [];
  for (let i = 0; i < j; i++) {
    initArr.push(i);
  }

  const pages = initArr.map((i) => startPage + i);

  return {
    totalItems,
    currentPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages,
  };
};

module.exports = paginate;
