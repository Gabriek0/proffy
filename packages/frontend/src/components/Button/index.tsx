import { ButtonHTMLAttributes, ReactNode } from 'react';
import { BeatLoader } from 'react-spinners';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

export function Button({ children, loading, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={loading}
      className={twMerge(
        'bg-green text-white font-semibold h-[3.5rem] w-full rounded-[8px] transition duration-75 ease-in hover:brightness-90 disabled:bg-gray-60 disabled:text-gray-40 disabled:hover:brightness-100 disabled:cursor-not-allowed',
        rest.className
      )}
    >
      {loading ? <BeatLoader size={10} color="#fff" /> : children}
    </button>
  );
}
