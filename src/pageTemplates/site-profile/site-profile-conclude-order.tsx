import { Paragraph } from '@/components/ui/paragraph';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/router';

interface ISiteProfileConcludeOrderProps {
  isVisible: boolean;
}

export const SiteProfileConcludeOrder = ({
  isVisible,
}: ISiteProfileConcludeOrderProps) => {
  const router = useRouter();

  return (
    isVisible && (
      <button
        className="flex items-center justify-between fixed bottom-0 left-0 right-0 w-full h-16 bg-red-800 z-10 px-8 hover:bg-red-700 active:bg-red-600"
        onClick={() => router.push('/cart')}
      >
        <Paragraph className="flex text-white font-bold">
          Concluir pedido
        </Paragraph>
        <ArrowRight color="#FFF" />
      </button>
    )
  );
};
