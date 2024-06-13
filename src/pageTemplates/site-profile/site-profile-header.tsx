import Image, { StaticImageData } from "next/image";

interface ISiteProfileHeaderProps {
  background: string | StaticImageData;
  photo: string | StaticImageData;
}

export const SiteProfileHeader = ({
  background,
  photo,
}: ISiteProfileHeaderProps) => {
  return (
    <div className="w-full h-40 lg:h-80 bg-red-300 relative">
      <Image src={background} className="w-full h-full object-cover" alt="" />
      <Image
        src={photo}
        className="border-2 border-black border-spacing-1 w-20 h-20 lg:h-40 lg:w-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
        alt=""
      />
    </div>
  );
};
