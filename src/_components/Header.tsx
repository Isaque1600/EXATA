import logo from "@/assets/logo.png";
import Link from "./Link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex w-full items-center justify-between bg-stone-950 p-8">
      <img src={logo} alt="logo" className="aspect-auto w-32" />
      <div className="flex flex-row items-center gap-8">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre Nós</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/contato">Contate-nos</Link>
      </div>
    </header>
  );
}
