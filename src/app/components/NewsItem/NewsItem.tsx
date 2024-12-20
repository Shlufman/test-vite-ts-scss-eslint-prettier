import { formatTimeAgo } from '@/app/helpers/formatTimeAgo';
import { Item } from '../NewsBanner/NewsBanner';
import styles from './styles.module.css';

interface NewsItemProps {
  item: Item;
}

const NewsItem = ({ item }: NewsItemProps) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export { NewsItem };
