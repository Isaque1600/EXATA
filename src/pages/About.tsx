import Footer from "@/_components/Footer";
import GlassBox from "@/_components/GlassBox";
import Header from "@/_components/Header";
import Section from "@/_components/Section";
import image10 from "@/assets/Image 10.jpeg";
import image8 from "@/assets/Image 8.jpeg";
import image9 from "@/assets/Image 9.jpeg";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <Header />
      <main>
        <Section className="p-24 text-white">
          <GlassBox className="w-full space-y-12 p-16 md:w-fit">
            <h1 className="text-lg font-bold md:text-3xl">
              A Solução ideal para a sua construção
            </h1>
            <h1 className="text-lg font-bold md:text-3xl">
              Com uma abordagem individual para cada cliente
            </h1>
          </GlassBox>
        </Section>
        <Section className="space-y-36 p-24 text-white">
          <div className="flex h-fit gap-24 md:h-96">
            <GlassBox className="hidden aspect-square w-1/3 overflow-clip md:block">
              <img
                src={image9}
                alt="imagem"
                className="h-full w-full object-scale-down"
              />
            </GlassBox>
            <GlassBox className="h-fit flex-grow space-y-16 p-16 md:h-full">
              <h1 className="text-left text-xl font-bold text-main md:text-3xl">
                Nosso Diferencial
              </h1>
              <p className="text-justify text-base text-slate-300 md:text-lg">
                Na nossa empresa, nos destacamos pela excelência em esquadrias e
                vidros, oferecendo soluções personalizadas que unem segurança,
                durabilidade e sofisticação. Com uma equipe especializada e
                comprometida, realizamos a produção, instalação e montagem de
                esquadrias e vidros de alta qualidade, adaptados às necessidades
                de cada projeto. Cada detalhe é pensado para garantir
                acabamentos impecáveis, sempre priorizando a satisfação e a
                confiança de nossos clientes.
              </p>
            </GlassBox>
          </div>
          <div className="flex h-fit gap-24 md:h-96">
            <GlassBox className="h-fit flex-grow space-y-16 p-16 md:h-full">
              <h1 className="text-left text-xl font-bold text-second md:text-3xl">
                Nossa Visão
              </h1>
              <p className="text-justify text-base text-slate-300 md:text-lg">
                Ser referência no setor de esquadrias e vidros, oferecendo
                soluções inovadoras e de alta qualidade que transformam projetos
                em realidade. Nossa visão é ir além da funcionalidade,
                proporcionando beleza e segurança em cada detalhe, e nos
                posicionando como parceiros de confiança para nossos clientes.
                Buscamos continuamente a excelência e a inovação, inspirando
                novos padrões de qualidade no mercado.
              </p>
            </GlassBox>
            <GlassBox className="fill hidden aspect-square w-1/3 overflow-clip p-0 md:block">
              <img
                src={image8}
                alt="imagem"
                className="h-full w-full object-fill"
              />
            </GlassBox>
          </div>
          <div className="flex h-fit gap-24 md:h-96">
            <GlassBox className="hidden aspect-square w-1/3 overflow-clip md:block">
              <img
                src={image10}
                alt="imagem"
                className="h-full w-full object-fill"
              />
            </GlassBox>
            <GlassBox className="h-fit flex-grow space-y-16 p-16 md:h-full">
              <h1 className="text-left text-xl font-bold text-main md:text-3xl">
                Nossa Equipe
              </h1>
              <p className="text-justify text-base text-slate-300 md:text-lg">
                Contamos com uma equipe altamente qualificada e dedicada,
                composta por profissionais experientes que compartilham o
                compromisso com a qualidade e a satisfação do cliente. Cada
                membro é treinado para entender as necessidades específicas de
                cada projeto, garantindo um atendimento personalizado e soluções
                eficientes. Nosso time trabalha em conjunto para entregar
                resultados que superam expectativas, sempre com
                profissionalismo, responsabilidade e paixão pelo que faz.
              </p>
            </GlassBox>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
