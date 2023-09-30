import { FormHTMLAttributes, ReactNode } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function FormContent({ children, ...rest }: FormProps) {
  return (
    <form
      className="h-full w-fit my-auto relative flex flex-col item-center justify-center"
      {...rest}
    >
      {children}
    </form>
  );
}
