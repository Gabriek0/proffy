import { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
}
export function FormError({ children }: FormProps) {
  return (
    <span className="text-red text-[1.05rem] text-center font-medium mt-[.5rem] ml-[.25rem] w-[22rem] sm:w-[280px]">
      {children}
    </span>
  );
}
