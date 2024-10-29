import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  to: string;
  className?: string;
};

export default function Link({ children, to, className }: Props) {
  return (
    <span className="relative">
      <NavLink
        to={to}
        className={twMerge(
          "text-lg font-semibold text-slate-300 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-slate-300 after:transition-all after:duration-300 after:ease-in after:content-[''] hover:text-slate-100 hover:after:left-0 hover:after:w-full aria-[current=page]:border-b-2 aria-[current=page]:after:opacity-0",
          className,
        )}
      >
        {children}
      </NavLink>
    </span>
  );
}
