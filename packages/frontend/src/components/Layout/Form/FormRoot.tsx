import { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
}

export function FormRoot({ children }: FormProps) {
  return (
    <main className="h-screen w-screen flex items-center">{children}</main>
  );
}
