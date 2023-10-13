import Image from 'next/image';
import Proffy from '/public/Proffy.svg';

export function SectionHero() {
  return (
    <section className="relative flex items-center justify-center h-full w-[50%] bg-purple-300 lg:hidden">
      <Image src={Proffy} alt="Proffy" fill />
    </section>
  );
}
