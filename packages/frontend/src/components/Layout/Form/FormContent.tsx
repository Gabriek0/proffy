import { FormHTMLAttributes, ReactNode } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function FormContent({ children, ...rest }: FormProps) {
  return (
    <form className="w-[22rem] mt-[2rem]" {...rest}>
      {children}
    </form>
  );
}
