import GlassBox from "./GlassBox";

type Props = {
  image?: string;
  title: string;
  description: string;
};

export default function ProductDisplayer({ image, title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <GlassBox className="aspect-square w-3/4 overflow-clip">
        <img src={image} alt={title} className="h-full w-full" />
      </GlassBox>
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
