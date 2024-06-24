'use client';

import { useEffect, useState } from 'react';
import { Heading } from '@/components/ui/heading';
import { Paragraph } from '@/components/ui/paragraph';
import { FormSelectField } from '@/components/form-select-field';
import { FormInputField } from '@/components/form-input-field';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import { SiteProfileHeader } from './site-profile-header';
import {
  MOCK_PROFILE,
  MOCK_CATEGORIES_CHOICES,
  MOCK_CATEGORIES,
} from '@/constants/mocks';
import { Category } from './category';
import { useRouter } from 'next/router';
import { useCart } from '@/hooks/useCart';


const profile = MOCK_PROFILE;

const SiteProfileTemplate = () => {
  const [categories, setCategories] = useState(MOCK_CATEGORIES);
  const [searchProducts, setSearchProducts] = useState('');

  const {cartItems} = useCart()
  const router = useRouter();


  const handleChangeCategory = (e) => {
    router.push({
      pathname: '/category',
      query: { category: e },
    });
  };

  useEffect(() => {
    const { category } = router.query;

    if (category) {
      const filteredCategories = MOCK_CATEGORIES.filter(
        (item) => item.name === category
      );
      setCategories(filteredCategories);
    } else {
      setCategories(MOCK_CATEGORIES);
    }
  }, [router.query]);

  return (
    <div className="flex flex-col relative w-full">
      <SiteProfileHeader
        background={profile.background}
        photo={profile.photo}
      />
      <div className="flex flex-col px-6 md:px-32 lg:px-48 xl:px-[300px] pt-8 pb-20">
        <Heading className="text-2xl">{profile.name}</Heading>
        <Paragraph className="flex items-center gap-2 my-2 font-medium text-muted-foreground">
          <MapPin size={12} />
          Boa Viagem, Recife, PE
        </Paragraph>
        <Paragraph>
          Melhor preço, melhores produtos você encontra aqui!
        </Paragraph>
        <form className="flex flex-col mt-6 sm:flex-row sm:gap-4 sm:items-center">
          <div className="flex items-center gap-4 flex-1">
            <FormSelectField
              className="max-w-[300px] w-full"
              onChange={(e) => handleChangeCategory(e)}
              choices={MOCK_CATEGORIES_CHOICES}
              placeholder="Selecione uma categoria"
            />
            <FormInputField
              value={searchProducts}
              onChange={(e) => setSearchProducts(e.target.value)}
              placeholder="Procure por um produto"
              className="max-w-[300px] w-full"
            />
          </div>
          <Button
            onClick={() => handleChangeCategory('')}
            className="flex ml-auto"
          >
            <Search color="#FFF" />
          </Button>
        </form>
        <div className="flex flex-col mt-6 gap-12">
          {categories.map((category: any, index: number) => (
            <Category key={index} name={category.name} items={category.items} />
          ))}
        </div>
      </div>
      {cartItems.length > 0? (
   <button className="flex items-center justify-between fixed bottom-0 left-0 right-0 w-full h-16 bg-red-800 z-10 px-8 hover:bg-red-700 active:bg-red-600" onClick={()=> router.push('/company/cart')}>
   <Paragraph className="flex text-white font-bold">
     Concluir pedido
   </Paragraph>
   <ArrowRight color="#FFF" />
 </button>
      ): null}
    </div>
  );
};

export default SiteProfileTemplate;
