import { Category as CategoryInterface } from '@/@types/Category';
import { Category } from './category';

interface ISiteProfileCategoriesProps {
  categoryActive: string;
  categories: CategoryInterface[];
}

export const SiteProfileCategories = ({
  categories,
  categoryActive,
}: ISiteProfileCategoriesProps) => {
  return (
    <div className="flex flex-col mt-6 gap-12">
      {categories.map((category: CategoryInterface, index: number) => (
        <Category
          key={index}
          name={category.name}
          items={category.items}
          categoryActive={''}
        />
      ))}
    </div>
  );
};
