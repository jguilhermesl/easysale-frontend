import { Heading } from '@/components/ui/heading';
import { Paragraph } from '@/components/ui/paragraph';
import { MapPin } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

interface ISiteProfileHeaderProps {
  profile: any;
  showDetails?: boolean;
}

export const SiteProfileHeader = ({
  profile,
  showDetails = true,
}: ISiteProfileHeaderProps) => {
  return (
    <div className="flex flex-col relative w-full">
      <div className="w-full h-40 lg:h-80 bg-red-300 relative">
        <Image
          src={profile.background}
          className="w-full h-full object-cover"
          alt=""
        />
        <Image
          src={profile.photo}
          className="border-2 border-black border-spacing-1 w-20 h-20 lg:h-40 lg:w-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
          alt=""
        />
      </div>
      {showDetails && (
        <div className="flex flex-col px-6 md:px-32 lg:px-48 xl:px-[300px] pt-6">
          <Heading className="text-2xl">{profile.name}</Heading>
          <Paragraph className="flex items-center gap-2 my-2 font-medium text-muted-foreground">
            <MapPin size={12} />
            Boa Viagem, Recife, PE
          </Paragraph>
          <Paragraph>
            Melhor preço, melhores produtos você encontra aqui!
          </Paragraph>
        </div>
      )}
    </div>
  );
};
