import { FormInputField } from '@/components/form-input-field';
import { FormSelectField } from '@/components/form-select-field';
import { Button } from '@/components/ui/button';
import { MOCK_CATEGORIES_CHOICES } from '@/constants/mocks';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/router';

export const SiteProfileFilters = ({ search, category, handleSearch }) => {
  const router = useRouter();

  const handleChangeCategory = (value) => {
    const currentQuery = { ...router.query };
    currentQuery.category = value;

    router.push(
      {
        pathname: router.pathname,
        query: currentQuery,
      },
      undefined,
      { shallow: true }
    );
  };

  const handleChangeSearch = (value) => {
    const currentQuery = { ...router.query };
    currentQuery.search = value;

    router.push(
      {
        pathname: router.pathname,
        query: currentQuery,
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <form className="flex flex-col mt-4">
      <div className="flex flex-col md:flex-row md:gap-4 w-full">
        <FormSelectField
          className="w-full"
          onChange={(e) => handleChangeCategory(e)}
          choices={MOCK_CATEGORIES_CHOICES}
          placeholder="Selecione uma categoria"
          value={category}
        />
        <FormInputField
          value={search}
          onChange={(e) => handleChangeSearch(e.target.value)}
          placeholder="Procure por um produto"
          className="w-full"
        />
      </div>
      <div className="flex items-center gap-4 md:justify-end">
        <Button variant="secondary" size="sm" type="button">
          <X className="mr-2 h-4 w-4" />
          Remover filtros
        </Button>
        <Button
          onClick={handleSearch}
          size="sm"
          className="flex w-full md:max-w-[300px]"
        >
          <Search color="#FFF" className="mr-2 h-4 w-4" />
          Buscar
        </Button>
      </div>
    </form>
  );
};
