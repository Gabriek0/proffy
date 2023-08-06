import { BackButton } from 'packages/frontend/src/icons';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function FormBackButton({ ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="absolute top-0 bg-transparent outline-non ease-in transition hover:scale-105"
    >
      <BackButton />
    </button>
  );
}
