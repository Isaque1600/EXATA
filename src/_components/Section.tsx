import { twJoin } from "tailwind-merge";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function Section({ children, className }: Props) {
  return (
    <section
      className={twJoin(
        "font-inter flex flex-col bg-gradient-to-b px-12 py-28 odd:from-stone-950 odd:to-slate-800 even:from-slate-800 even:to-stone-950",
        className,
      )}
    >
      {children}
    </section>
  );
}
