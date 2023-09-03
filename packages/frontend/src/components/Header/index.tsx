import { ArrowRight, HappyFaceEmoji, ProffyLogo } from '../../icons';

export function Header() {
  return (
    <div className="bg-[#8257E5] min-h-[320px]">
      <nav className="bg-[#774DD6] flex justify-between p-2">
        <div className="flex items-center justify-center">
          <ArrowRight />
        </div>
        <span className="text-[#D4C2FF]">Estudar</span>
        <div className="flex items-center justify-center">
          <ProffyLogo />
        </div>
      </nav>
      <div className="flex max-w-3xl justify-between items-center m-auto py-8 mt-12">
        <h1 className="text-white font-bold text-3xl">
          Estes são os <br />
          proffys disponíveis.
        </h1>
        <div className="flex ">
          <div className="p-2">
            <HappyFaceEmoji />
          </div>
          <span className="text-gray-50">
            Nós temos 32 <br />
            professores
          </span>
        </div>
      </div>
    </div>
  );
}
