import { Image } from '@/app/components/Image/Image';
import styles from './styles.module.css';
import { formatTimeAgo } from '@/app/helpers/formatTimeAgo';
import { withSkeleton } from '@/app/helpers/hocs/withSkeleton';

interface NewsBannerProps {
  item: Item;
}

interface Item {
  id: string;
  title: string;
  published: string;
  author: string;
  image: string;
}

const NewsBanner = ({ item }: NewsBannerProps) => {
  return (
    <div className={styles.banner}>
      <Image image={item.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);
export default NewsBannerWithSkeleton;
export { NewsBanner, type NewsBannerProps, type Item };
