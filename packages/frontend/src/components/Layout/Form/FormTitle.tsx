import { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
}

export function FormTitle({ children }: FormProps) {
  return (
    <h1 className="text-purple-600 font-semibold leading-[34px] text-[2.25rem] mb-[1rem]">
      {children}
    </h1>
  );
}
