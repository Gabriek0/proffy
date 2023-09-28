import { ReactNode } from 'react';

interface SuccessProps {
  children: ReactNode;
}
export function SuccessSubtitle({ children }: SuccessProps) {
  return (
    <span className="text-purple-100 font-normal line-clamp-[26px] text-[1.15rem] mb-[5rem] text-center">
      {children}
    </span>
  );
}
