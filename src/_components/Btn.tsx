import React from "react";
import { twMerge } from "tailwind-merge";
import { Button, ButtonProps } from "./ui/button";

type Props = {
  children?: React.ReactNode;
  className?: string;
} & ButtonProps;

export default function Btn({ children, className }: Props) {
  return (
    <Button
      className={twMerge(
        "h-fit cursor-pointer rounded-md bg-stone-800 px-12 py-4 text-lg text-slate-300 transition duration-150 ease-in-out hover:scale-105 hover:text-slate-50",
        className,
      )}
    >
      {children}
    </Button>
  );
}
