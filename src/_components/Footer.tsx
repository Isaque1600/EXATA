type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 to-slate-950 p-12 px-24">
      <h1 className="w-full text-center text-lg font-bold text-white">
        Entre em Contato
      </h1>
      <div className="flex w-full justify-between pr-3">
        <div>
          <h2 className="text-start text-base text-slate-400">Visite-nos</h2>
          <p className="text-start text-sm text-slate-400">
            Rua Lorem Ipsum Dolore
          </p>
        </div>
        <div>
          <h2 className="text-center text-base text-slate-400">
            Entre em contato
          </h2>
          <p className="text-center text-sm text-slate-400">
            (83) 9 9999-9999 @loremipsum @loremipsum
          </p>
        </div>
        <div>
          <h2 className="text-end text-base text-slate-400">Email</h2>
          <p className="text-end text-sm text-slate-400">
            LoremIpsum@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
