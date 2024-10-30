import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
  glassColor?: string;
};

export default function GlassBox({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        "h-full w-full rounded-3xl border border-gray-600 bg-opacity-20 bg-[radial-gradient(98.05%_261.61%_at_20.95%_3.59%,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_100%)] bg-clip-padding backdrop-blur-lg backdrop-filter",
        className,
      )}
    >
      {children}
    </div>
  );
}
