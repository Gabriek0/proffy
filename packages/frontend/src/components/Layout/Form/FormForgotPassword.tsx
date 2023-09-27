import { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
}

export function FormForgotPassword(props: FormProps) {
  return (
    <div className="flex items-center justify-between px-[.20rem]">
      {props.children}
    </div>
  );
}
