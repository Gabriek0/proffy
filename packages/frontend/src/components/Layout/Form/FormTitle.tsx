import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface FormProps {
  children: ReactNode;
  className?: string;
}

export function FormTitle({ children, className }: FormProps) {
  return (
    <h1
      className={twMerge(
        'text-purple-600 font-semibold leading-[34px] text-[2.25rem] mb-[1rem]',
        className
      )}
    >
      {children}
    </h1>
  );
}
