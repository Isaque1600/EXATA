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
          <GlassBox className="w-fit space-y-12 p-16">
            <h1 className="text-3xl font-bold">
              A Solução ideal para a sua construção
            </h1>
            <h1 className="text-3xl font-bold">
              Com uma abordagem individual para cada cliente
            </h1>
          </GlassBox>
        </Section>
        <Section className="space-y-36 p-24 text-white">
          <div className="flex h-96 gap-24">
            <GlassBox className="aspect-square w-1/3"></GlassBox>
            <GlassBox className="h-full flex-grow space-y-16 p-16">
              <h1 className="text-left text-3xl font-bold text-main">
                Nosso Diferencial
              </h1>
              <p className="text-justify text-lg text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, tempora repellendus voluptatibus provident veniam
                illum eveniet sed amet, cum delectus ex libero molestiae natus
                animi commodi ducimus temporibus minus? Id.
              </p>
            </GlassBox>
          </div>
          <div className="flex h-96 gap-24">
            <GlassBox className="h-full flex-grow space-y-16 p-16">
              <h1 className="text-left text-3xl font-bold text-second">
                Nosso Visão
              </h1>
              <p className="text-justify text-lg text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, tempora repellendus voluptatibus provident veniam
                illum eveniet sed amet, cum delectus ex libero molestiae natus
                animi commodi ducimus temporibus minus? Id.
              </p>
            </GlassBox>
            <GlassBox className="aspect-square w-1/3"></GlassBox>
          </div>
          <div className="flex h-96 gap-24">
            <GlassBox className="aspect-square w-1/3"></GlassBox>
            <GlassBox className="h-full flex-grow space-y-16 p-16">
              <h1 className="text-left text-3xl font-bold text-main">
                Nosso Equipe
              </h1>
              <p className="text-justify text-lg text-slate-300">
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
