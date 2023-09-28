import { ReactNode } from 'react';

interface SuccessProps {
  children: ReactNode;
}

export function SuccessTitle({ children }: SuccessProps) {
  return (
    <h1 className="text-white font-semibold text-[2.5rem] line-clamp-[2.5rem] my-[.8rem] text-center">
      {children}
    </h1>
  );
}
