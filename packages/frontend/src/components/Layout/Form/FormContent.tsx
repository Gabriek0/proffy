import { FormHTMLAttributes, ReactNode } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function FormContent({ children, ...rest }: FormProps) {
  return (
    <form
      className="relative flex flex-col item-center justify-center h-full w-fit mt-[2rem] "
      {...rest}
    >
      {children}
    </form>
  );
}
