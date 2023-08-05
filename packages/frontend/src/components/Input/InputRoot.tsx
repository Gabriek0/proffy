import { ReactNode } from 'react';

interface InputProps {
  children: ReactNode;
  variantStyle?: 'topRounded' | 'bottomRounded';
}

export function InputRoot({ children, variantStyle }: InputProps) {
  return (
    <div
      className={`relative z-0 h-fit w-fit bg-gray-10 border-x-[2px] border-b-[2px] border-solid border-gray-30 group ${
        variantStyle &&
        variantStyle === `topRounded` &&
        `border-t-[2px] rounded-t-[8px]`
      } ${
        variantStyle && variantStyle === `bottomRounded` && ` rounded-b-[8px]`
      }`}
    >
      {children}
    </div>
  );
}
