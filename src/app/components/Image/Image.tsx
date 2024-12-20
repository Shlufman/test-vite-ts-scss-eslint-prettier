import styles from './styles.module.css';

interface ImageProps {
  image: string;
}

const Image = ({ image }: ImageProps) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
};

export { Image };
