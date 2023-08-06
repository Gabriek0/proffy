import Image from 'next/image';
import Proffy from '/public/Proffy.svg';
import ProffyTransparent from '/public/ProffyTransparent.svg';

interface SectionProps {
  transparent?: boolean;
}

export function SectionHero({ transparent }: SectionProps) {
  return (
    <section className="relative flex items-center justify-center h-full w-[50%] bg-purple-300 ">
      <Image src={transparent ? ProffyTransparent : Proffy} alt="Proffy" fill />
    </section>
  );
}
