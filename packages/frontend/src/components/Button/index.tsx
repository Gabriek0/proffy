import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="bg-green text-white font-semibold h-[3.5rem] w-full rounded-[8px] transition duration-75 ease-in hover:brightness-90"
    >
      {children}
    </button>
  );
}
