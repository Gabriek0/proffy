import Image from 'next/image';
import { Done } from '@front/icons/index';
import { ReactNode } from 'react';
import BackgroundSpots from '/public/BackgroundSpots.svg';

interface SuccessProps {
  children: ReactNode;
}

export function SuccessRoot({ children }: SuccessProps) {
  return (
    <main className="relative flex items-center justify-center w-screen h-screen bg-purple-300">
      <Image
        src={BackgroundSpots}
        alt="Background Spots"
        className="absolute z-0 sm:hidden"
      />

      <div className="relative z-10 flex flex-col items-center justify-center max-w-[480px] ">
        <Done />

        {children}
      </div>
    </main>
  );
}
