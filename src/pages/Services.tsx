import Footer from "@/_components/Footer";
import GlassBox from "@/_components/GlassBox";
import Header from "@/_components/Header";
import ProductDisplayer from "@/_components/ProductDisplayer";
import Section from "@/_components/Section";
import image1 from "@/assets/Image 1.jpeg";
import image2 from "@/assets/Image 2.jpeg";
import image3 from "@/assets/Image 3.jpeg";
import image4 from "@/assets/Image 4.jpeg";
import image5 from "@/assets/Image 5.jpeg";
import image6 from "@/assets/Image 6.jpeg";
import image7 from "@/assets/Image 7.jpeg";

type Props = {};

export default function Services({}: Props) {
  return (
    <>
      <Header />
      <main>
        <Section className="space-y-40 p-24 text-white">
          <div className="space-y-12">
            <h1 className="text-xl font-extrabold md:text-5xl">
              O Serviço completo para sua <p>reforma</p>
            </h1>
            <p className="text-sm md:text-lg">
              A solução ideal para a sua reforma, feita na{" "}
              <p>medida para a sua necessidade</p>
            </p>
          </div>
          <GlassBox className="grid h-fit w-full grid-cols-1 gap-y-16 p-24 md:grid-cols-3">
            <ProductDisplayer
              image={image1}
              title="Produção de Vidros"
              description="Produção especializada em vidros"
            />
            <ProductDisplayer
              image={image2}
              title="Produção de Esquadrias"
              description="Produção especializada em Esquadrias"
            />
            <ProductDisplayer
              image={image3}
              title="Instalação de Esquadrias"
              description="Instalação profissional de Esquadrias"
            />
            <ProductDisplayer
              image={image4}
              title="Produção de Forros"
              description="Produção especializada de Forros"
            />
            <ProductDisplayer
              image={image5}
              title="Instalação de Forros"
              description="Instalação profissional de Forros"
            />
            <ProductDisplayer
              image={image6}
              title="Montagem de Forros"
              description="Montagem profissional de Forros"
            />
            <ProductDisplayer
              image={image7}
              title="Montagem de Esquadrias"
              description="Montagem profissional de Esquadrias"
            />
          </GlassBox>
        </Section>
      </main>
      <Footer />
    </>
  );
}
