import { Item } from '../NewsBanner/NewsBanner';
import { NewsItem } from '../NewsItem/NewsItem';
import styles from './styles.module.css';

interface ImageProps {
  news: Item[];
}

const NewsList = ({ news }: ImageProps) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export { NewsList };
