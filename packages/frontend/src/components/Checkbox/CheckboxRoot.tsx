import { ReactNode } from 'react';

interface CheckboxProps {
  children: ReactNode;
}

export function CheckboxRoot({ children }: CheckboxProps) {
  return (
    <div className="flex items-center items-top space-x-2 my-4">{children}</div>
  );
}
