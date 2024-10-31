import Footer from "@/_components/Footer";
import GlassBox from "@/_components/GlassBox";
import Header from "@/_components/Header";
import Section from "@/_components/Section";

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
            <GlassBox className="hidden aspect-square w-1/3 md:block"></GlassBox>
            <GlassBox className="h-fit flex-grow space-y-16 p-16 md:h-full">
              <h1 className="text-left text-xl font-bold text-main md:text-3xl">
                Nosso Diferencial
              </h1>
              <p className="text-justify text-base text-slate-300 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, tempora repellendus voluptatibus provident veniam
                illum eveniet sed amet, cum delectus ex libero molestiae natus
                animi commodi ducimus temporibus minus? Id.
              </p>
            </GlassBox>
          </div>
          <div className="flex h-fit gap-24 md:h-96">
            <GlassBox className="h-fit flex-grow space-y-16 p-16 md:h-full">
              <h1 className="text-left text-xl font-bold text-second md:text-3xl">
                Nosso Visão
              </h1>
              <p className="text-justify text-base text-slate-300 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, tempora repellendus voluptatibus provident veniam
                illum eveniet sed amet, cum delectus ex libero molestiae natus
                animi commodi ducimus temporibus minus? Id.
              </p>
            </GlassBox>
            <GlassBox className="hidden aspect-square w-1/3 md:block"></GlassBox>
          </div>
          <div className="flex h-fit gap-24 md:h-96">
            <GlassBox className="hidden aspect-square w-1/3 md:block"></GlassBox>
            <GlassBox className="h-fit flex-grow space-y-16 p-16 md:h-full">
              <h1 className="text-left text-xl font-bold text-main md:text-3xl">
                Nosso Equipe
              </h1>
              <p className="text-justify text-base text-slate-300 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, tempora repellendus voluptatibus provident veniam
                illum eveniet sed amet, cum delectus ex libero molestiae natus
                animi commodi ducimus temporibus minus? Id.
              </p>
            </GlassBox>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
