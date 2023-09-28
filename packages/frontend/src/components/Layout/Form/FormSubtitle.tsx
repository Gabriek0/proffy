import { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
}

export function FormSubtitle({ children }: FormProps) {
  return (
    <h2 className=" text-purple-500 font-normal text-[1.25rem] leading-[26px] mb-[2.5rem] 2sm:hidden">
      {children}
    </h2>
  );
}
