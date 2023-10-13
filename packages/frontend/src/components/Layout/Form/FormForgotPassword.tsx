import { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
}

export function FormForgotPassword({ children }: FormProps) {
  return (
    <div className="flex items-center justify-between px-[.20rem]">
      {children}
    </div>
  );
}
