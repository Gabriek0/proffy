import { ElementType } from 'react';

interface InputProps {
  icon: ElementType;
}

export function InputIcon({ icon: Icon }: InputProps) {
  return (
    <Icon className="cursor-pointer h-[24px] w-[24px] absolute right-[24px] top-[24px] bottom-[24px] text-gray-40 outline-non ease-in transition hover:scale-105" />
  );
}
