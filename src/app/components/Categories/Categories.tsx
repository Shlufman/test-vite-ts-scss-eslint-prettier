import styles from './styles.module.css';

interface CategoriesProps {
  categories: string[];
  setSelectedCategory: (category: string) => void;
  selectedCategory: string;
}

const Categories = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}: CategoriesProps) => {
  return (
    <header className={styles.categories}>
      {categories.map((category) => {
        return (
          <button
            onClick={() => {
              setSelectedCategory(category);
            }}
            className={
              selectedCategory === category ? styles.active : styles.item
            }
            key={category}
          >
            {category}
          </button>
        );
      })}
    </header>
  );
};

export { Categories };
