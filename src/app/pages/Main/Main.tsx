import { NewsBanner } from '@/app/components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { getNews } from '@/api/apiNews';
import { NewsList } from '@/app/components/NewsList/NewsList';
import { Skeleton } from '@/app/components/Skeleton/Skeleton';
import { Pagination } from '@/app/components/Pagination/Pagination';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 10;
  const pageSize = 10;
  const fetchNews = async (currentPage: number) => {
    try {
      setIsLoading(true);
      const response = await getNews(currentPage, pageSize);
      console.log(response);
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={'banner'} count={1} />
      )}

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={'item'} count={10} />
      )}
      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
};

export { Main };
