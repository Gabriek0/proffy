import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

export function SectionForm({ children }: SectionProps) {
  return (
    <section className="flex justify-center items-center p-[2rem] h-full w-1/2 lg:w-full 2sm:p-[1rem] ">
      {children}
    </section>
  );
}
