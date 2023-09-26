import { InputHTMLAttributes, ReactNode } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export function CheckboxLabel({ children, ...rest }: CheckboxProps) {
  return (
    <div className="grid gap-1.5 leading-none">
      <label
        {...rest}
        htmlFor="checkbox"
        className="cursor-pointer text-gray-40 text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {children}
      </label>
    </div>
  );
}
