import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Button, ButtonProps } from "./ui/button";

type Props = {
  children?: React.ReactNode;
  className?: string;
  to: string;
} & ButtonProps;

export default function Btn({ children, className, ...props }: Props) {
  return (
    <Link to={props.to}>
      <Button
        className={twMerge(
          "h-fit w-full cursor-pointer text-wrap rounded-md bg-stone-800 px-12 py-4 text-lg text-slate-300 transition duration-150 ease-in-out hover:scale-105 hover:text-slate-50",
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
}
