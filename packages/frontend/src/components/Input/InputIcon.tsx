import { ElementType } from 'react';

interface InputProps {
  icon: ElementType;
}

export function InputIcon({ icon: Icon }: InputProps) {
  return <Icon />;
}
