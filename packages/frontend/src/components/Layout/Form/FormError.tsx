import { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
}
export function FormError({ children }: FormProps) {
  return (
    <span className="text-red text-[1.05rem] text-left font-medium mt-[.5rem] ml-[.25rem]">
      {children}
    </span>
  );
}
