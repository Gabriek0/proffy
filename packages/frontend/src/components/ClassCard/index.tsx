import { WhatsAppLogo } from '../../icons';

export default function ClassCard() {
  return (
    <div className="p-8 rounded-md bg-white border border-gray-300 w-[800px]">
      <div className="flex items-center">
        <img
          src="https://avatars.githubusercontent.com/u/52966246?v=4"
          alt=""
          className="w-[150px] rounded-full"
        />
        <div className="flex flex-col ml-8">
          <span className="font-bold text-3xl antialiased tracking-wide">
            Daniel Ribeiro
          </span>
          <span className="text-gray-500">Programação</span>
        </div>
      </div>
      <div className="text-gray-700 mt-8">
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </div>
      <div className="flex justify-between">
        <div className="bg-gray-100 rounded w-[120px] p-2 border border-gray-30 mt-4">
          <div className="flex flex-col">
            <span className="text-gray-500">Dia</span>
            <span className="font-bold">Segunda</span>
          </div>
          <div>
            <span className="text-gray-500">Horário</span>
            <br />
            <span className="font-bold">8h - 18h</span>
          </div>
        </div>
        <div className="bg-gray-100 rounded w-[120px] p-2 border border-gray-30 mt-4">
          <div className="flex flex-col">
            <span className="text-gray-500">Dia</span>
            <span className="font-bold">Segunda</span>
          </div>
          <div>
            <span className="text-gray-500">Horário</span>
            <br />
            <span className="font-bold">8h - 18h</span>
          </div>
        </div>
        <div className="bg-gray-100 rounded w-[120px] p-2 border border-gray-30 mt-4">
          <div className="flex flex-col">
            <span className="text-gray-500">Dia</span>
            <span className="font-bold">Segunda</span>
          </div>
          <div>
            <span className="text-gray-500">Horário</span>
            <br />
            <span className="font-bold">8h - 18h</span>
          </div>
        </div>
        <div className="bg-gray-100 rounded w-[120px] p-2 border border-gray-30 mt-4">
          <div className="flex flex-col">
            <span className="text-gray-500">Dia</span>
            <span className="font-bold">Segunda</span>
          </div>
          <div>
            <span className="text-gray-500">Horário</span>
            <br />
            <span className="font-bold">8h - 18h</span>
          </div>
        </div>
        <div className="bg-gray-100 rounded w-[120px] p-2 border border-gray-30 mt-4">
          <div className="flex flex-col">
            <span className="text-gray-500">Dia</span>
            <span className="font-bold">Segunda</span>
          </div>
          <div>
            <span className="text-gray-500">Horário</span>
            <br />
            <span className="font-bold">8h - 18h</span>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div>
          <span className="text-gray-40 pr-2">Preço/hora</span>
          <span className="text-purple-300 font-bold">R$20,00</span>
        </div>
        <div>
          <button className="flex bg-green p-2 rounded-md">
            <WhatsAppLogo />
            <span className="text-white px-4">Entrar em contato</span>
          </button>
        </div>
      </div>
    </div>
  );
}
