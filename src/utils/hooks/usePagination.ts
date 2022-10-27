import { useEffect, useState } from 'react';

const usePagination = (itemsPerPage: number, data: any[] = []) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const pagesIndexArray = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= maxPage; i++) {
      pagesIndexArray.push(i);
      setPageNumbers(pagesIndexArray);
    }
  }, [maxPage]);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;

    return data.slice(begin, end);
  };

  const next = () => {
    setCurrentPage((curPage) => Math.min(curPage + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage((curPage) => Math.max(curPage - 1, 1));
  };

  const jump = (page: number) => {
    setCurrentPage(page);
  };

  const firstRange = () => {
    if (currentPage > pageNumbers.length - 3) return pageNumbers.length - 5;
    if (currentPage <= 3) return 0;
    if (currentPage > 3) return currentPage - 3;
    return 0;
  };

  const lastRange = () => {
    if (currentPage < 4) return 5;
    if (currentPage < pageNumbers.length) return currentPage + 2;
    if (currentPage <= pageNumbers.length - 5) return pageNumbers.length;
    return pageNumbers.length;
  };

  const getPageNum = () => pageNumbers.slice(firstRange(), lastRange());

  return {
    next,
    prev,
    jump,
    currentData,
    currentPage,
    maxPage,
    getPageNum,
  };
};

export default usePagination;
