import { useRouter } from 'next/navigation';
import { BackButton } from 'packages/frontend/src/icons';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function FormBackButton({ ...rest }: ButtonProps) {
  const router = useRouter();

  const onBack = () => router.back();

  return (
    <button
      type="button"
      onClick={onBack}
      className="absolute top-0 bg-transparent outline-non ease-in transition hover:scale-105"
      {...rest}
    >
      <BackButton />
    </button>
  );
}
