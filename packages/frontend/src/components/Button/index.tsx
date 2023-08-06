import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'bg-green text-white font-semibold h-[3.5rem] w-full rounded-[8px] transition duration-75 ease-in hover:brightness-90 disabled:bg-gray-60 disabled:text-gray-40 disabled:hover:brightness-100 disabled:cursor-not-allowed',
        rest.className
      )}
    >
      {children}
    </button>
  );
}
