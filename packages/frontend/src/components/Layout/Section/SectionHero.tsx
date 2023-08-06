import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

export function SectionHero({ children }: SectionProps) {
  return (
    <section className="h-full w-[50%] bg-purple-300 ">{children}</section>
  );
}
