import { ElementType } from 'react';

interface InputProps {
  icon: ElementType;
}

export function InputIcon({ icon: Icon }: InputProps) {
  return (
    <Icon className="h-[24px] w-[24px] absolute right-[24px] top-[24px] bottom-[24px] " />
  );
}
