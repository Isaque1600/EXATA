import GlassBox from "./GlassBox";

type Props = {
  image?: string;
  title: string;
  description: string;
};

export default function ProductDisplayer({ image, title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <GlassBox className="aspect-square w-24 overflow-clip rounded-md md:w-3/4">
        <img src={image} alt={title} className="h-full w-full" />
      </GlassBox>
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-base font-bold md:text-xl">{title}</h1>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}
