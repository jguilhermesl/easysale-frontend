'use client';
import { useCallback, useEffect, useState } from 'react';
import { Paragraph } from '@/components/ui/paragraph';
import { ArrowRight } from 'lucide-react';
import { SiteProfileHeader } from './site-profile-header';
import { MOCK_PROFILE, MOCK_CATEGORIES } from '@/constants/mocks';
import { useRouter } from 'next/router';
import { useCart } from '@/hooks/useCart';
import { SiteProfileFilters } from './site-profile-filters';
import { SiteProfileCategories } from './site-profile-categories';
import { Category } from '@/@types/Category';
import { SiteProfileConcludeOrder } from './site-profile-conclude-order';

const profile = MOCK_PROFILE;

const SiteProfileTemplate = () => {
  const [categories, setCategories] = useState([] as Category[]);
  const [searchUrlState, setSearchUrlState] = useState('');
  const [categoryUrlState, setCategoryUrlState] = useState('');

  const { cartItems } = useCart();
  const router = useRouter();

  useEffect(() => {
    const { category, search } = router.query;

    setSearchUrlState(search as string);
    setCategoryUrlState(category as string);
  }, [router.query]);

  const handleGetCategories = useCallback(() => {
    setCategories(MOCK_CATEGORIES);
  }, []);

  useEffect(() => {
    handleGetCategories();
  }, [handleGetCategories]);

  return (
    <div className="flex flex-col relative w-full">
      <SiteProfileHeader profile={profile} />
      <div className="flex flex-col px-6 md:px-32 lg:px-48 xl:px-[300px] pb-20">
        <SiteProfileFilters
          search={searchUrlState}
          category={categoryUrlState}
          handleSearch={() => {}}
        />
        <SiteProfileCategories
          categories={categories}
          categoryActive={categoryUrlState}
        />
      </div>
      <SiteProfileConcludeOrder isVisible={cartItems.length !== 0} />
    </div>
  );
};

export default SiteProfileTemplate;
