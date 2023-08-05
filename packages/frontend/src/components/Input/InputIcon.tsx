import { ElementType } from 'react';

interface InputProps {
  icon: ElementType;
}

export function InputIcon({ icon: Icon }: InputProps) {
  return <Icon className="absolute right-[24px] top-[24px] bottom-[24px]" />;
}
