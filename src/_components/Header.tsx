import logo from "@/assets/logo.png";
import useScreenSize from "@/Hooks/ScreenSize";
import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "./Link";
import { Button } from "./ui/button";

type Props = {};

export default function Header({}: Props) {
  const [active, setActive] = useState(false);

  const screenSize = useScreenSize();

  const screenWidth = screenSize.width;

  return (
    <header className="relative flex w-full flex-col items-center justify-between gap-8 bg-stone-950 p-8 md:flex-row md:p-8 md:px-20">
      <div className="flex w-full items-center justify-between md:w-fit">
        <img src={logo} alt="logo" className="aspect-auto w-20 md:w-32" />
        {screenWidth < 768 ? (
          <Button
            variant={"ghost"}
            size={"icon"}
            className="z-20 text-white hover:scale-110 hover:bg-transparent hover:text-white"
            onClick={() => setActive(!active)}
          >
            <Menu />
          </Button>
        ) : null}
      </div>
      <div
        data-active={active}
        className="relative bottom-10 z-20 m-4 hidden w-full flex-row items-center gap-8 overflow-auto text-nowrap p-4 data-[active=true]:flex md:relative md:top-0 md:flex md:w-fit md:flex-row"
      >
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre Nós</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/contato">Contate-nos</Link>
      </div>
    </header>
  );
}
