import Footer from "@/_components/Footer";
import GlassBox from "@/_components/GlassBox";
import Header from "@/_components/Header";
import Section from "@/_components/Section";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

type Props = {};

export default function Contact({}: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Header />
      <main>
        <Section className="space-y-24">
          <h1 className="text-5xl font-bold text-white">
            Entre em contato conosco <p>para começar o seu projeto</p>
          </h1>
          <GlassBox className="flex aspect-auto h-fit space-x-44 p-24 text-white">
            <div className="flex flex-col space-y-8">
              <div className="space-y-4">
                <h1 className="text-xl font-semibold">Telefones:</h1>
                <span className="flex items-center gap-2">
                  <p className="text-slate-300">(83) 9 9999-9999</p>
                  <a
                    className="aspect-square w-fit cursor-pointer rounded-full border-2 border-lime-500 p-1"
                    href="#"
                  >
                    <FaWhatsapp className="size-6 text-lime-500" />
                  </a>
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-semibold">Instagram:</h1>
                <a className="text-blue-300" href="#">
                  @loremIpsum
                </a>
              </div>
              <div className="space-y-4">
                <h1 className="text-xl font-semibold">Email:</h1>
                <p className="text-slate-300">loremipsum@gmail.com</p>
              </div>
            </div>
            <div className="flex h-fit flex-grow flex-col items-center">
              <h1 className="text-center text-xl font-semibold">Endereço:</h1>
              {loading ? <Loader2 className="animate-spin" /> : ""}
              <iframe
                onLoad={() => setLoading(!loading)}
                width="850"
                height="650"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBD3BxjBeswG0Htikyjb55DVCGKvjPz4zA&q=Eiffel+Tower,Paris+France"
                allowFullScreen
              ></iframe>
            </div>
          </GlassBox>
        </Section>
      </main>
      <Footer />
    </>
  );
}
