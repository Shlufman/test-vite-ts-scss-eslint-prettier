import styles from './styles.module.css';

interface SkeletonProps {
  count: number;
  type: string;
}

const Skeleton = ({ count = 1, type = 'banner' }: SkeletonProps) => {
  return (
    <>
      {count > 1 ? (
        <ul className={styles.list}>
          {[
            ...Array(count).map((_, index) => (
              <li
                key={index}
                className={type === 'banner' ? styles.banner : styles.item}
              ></li>
            )),
          ]}
        </ul>
      ) : (
        <li className={type === 'banner' ? styles.banner : styles.item}></li>
      )}
    </>
  );
};

export { Skeleton };
