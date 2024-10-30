import Btn from "@/_components/Btn";
import CircleSVG from "@/_components/CircleSVG";
import Footer from "@/_components/Footer";
import GlassBox from "@/_components/GlassBox";
import Header from "@/_components/Header";
import LSVG from "@/_components/LSVG";
import Section from "@/_components/Section";
import StarSVG from "@/_components/StarSVG";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main className="">
        <Section className="relative flex h-[120vh] text-white">
          <GlassBox className="z-10 flex aspect-auto h-fit w-[1058px] flex-col gap-20 p-8 text-slate-300">
            <div className="space-y-10">
              <h1 className="font-inter text-wrap text-4xl font-bold">
                A SUA <span className="text-main">SOLUÇÃO</span> PARA{" "}
                <p className="text-third">VIDROS E JANELAS</p>
              </h1>
              <p className="text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi quo ut vel illo ab. Rerum quo magni, totam itaque,
                iste eligendi in numquam at dignissimos, error quia!
                Dignissimos, veniam vitae?
              </p>
            </div>
            <div className="flex items-center justify-center gap-12">
              <Btn className="relative z-[1] bg-gradient-to-r from-third via-second to-third transition-all duration-150 ease-in-out before:absolute before:bottom-[2px] before:left-[2px] before:right-[2px] before:top-[2px] before:-z-[1] before:rounded-md before:bg-stone-800 before:content-[''] after:text-lg after:content-[attr(data)] hover:before:bg-slate-900">
                Conheça Nossos Serviços
              </Btn>
              <Btn className="border-2 border-slate-600">Contate-nos</Btn>
            </div>
          </GlassBox>
          <StarSVG className="absolute -right-[1050px] -top-96 scale-[85%]" />
          <CircleSVG className="absolute bottom-0 right-44 scale-90" />
          <LSVG className="absolute -left-96 bottom-0 scale-75" />
        </Section>
        <Section className="flex items-end text-white">
          <GlassBox className="w-fit space-y-12 p-24">
            <h1 className="text-end text-4xl font-bold">
              A Solução <span className="text-third">Perfeita</span> para a{" "}
              <p className="text-main">Sua Reforma</p>
            </h1>
            <p className="text-justify text-slate-300">
              Fabricamos nossos produtos com o melhor custo beneficio e sob
              demanda do cliente
            </p>
          </GlassBox>
        </Section>
        <Section>
          <h1 className="text-center text-5xl font-extrabold text-main">
            Alguns dos Nossos Serviços
          </h1>
          <div className="grid grid-cols-3 grid-rows-1 gap-20 p-44">
            <GlassBox className="flex h-80 w-fit flex-col space-y-16 p-12 text-white">
              <h1 className="text-wrap text-center text-2xl font-medium text-third">
                Produção de Janelas
              </h1>
              <p className="text-wrap text-center text-base text-white">
                Produção das melhores janelas da região direto para sua
                residencia
              </p>
            </GlassBox>
            <GlassBox className="flex h-80 w-fit flex-col space-y-16 p-12 text-white">
              <h1 className="text-wrap text-center text-2xl font-medium text-third">
                Montagem das Janelas
              </h1>
              <p className="text-wrap text-center text-base text-white">
                Basta nos contatar para montar a sua janela com a melhor
                qualidade da região
              </p>
            </GlassBox>
            <GlassBox className="flex h-80 w-fit flex-col space-y-16 p-12 text-white">
              <h1 className="text-wrap text-center text-2xl font-medium text-third">
                Instalação de Janelas
              </h1>
              <p className="text-wrap text-center text-base text-white">
                Além da Montagem e Produção, também fazemos a Instalação das
                Janelas
              </p>
            </GlassBox>
          </div>
        </Section>
        <Section className="flex flex-col items-center space-y-24 py-56">
          <h1 className="w-full text-center text-5xl font-bold text-white">
            Sua <span className="text-main">Residencia</span> e{" "}
            <span className="text-second">Empresa</span> em um novo{" "}
            <span className="transition-all duration-1000 ease-in-out">
              NIVEL
            </span>
          </h1>
          <Btn className="w-fit justify-self-center bg-third text-xl font-semibold hover:bg-second">
            Entre em Contato
          </Btn>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
