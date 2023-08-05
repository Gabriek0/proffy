import { ReactNode } from 'react';

interface InputProps {
  children: ReactNode;
}

export function InputRoot({ children }: InputProps) {
  return (
    <div className="relative z-0 h-fit w-fit bg-gray-10 border-[2px] border-solid border-gray-30 group">
      {children}
    </div>
  );
}
