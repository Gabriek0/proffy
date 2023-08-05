import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export function InputContent({ name, label, ...rest }: InputProps) {
  return (
    <>
      <hr className="absolute group-focus-within:left-[-1px] group-focus-within:h-[48px] group-focus-within:w-[2px] group-focus-within:rounded-[8px] group-focus-within:bg-purple-300 group-focus-within:top-[.85rem]" />

      <label
        htmlFor={name}
        className="absolute text-gray-40 text-[18px] leading[24px] font-normal top-[24px] bottom-0 mx-auto left-[24px] group-focus-within:top-[8px] group-focus-within:text-[14px] group-focus-within:text-gray-50"
      >
        {label}
      </label>
      <input
        name={name}
        className="h-[4.5rem] w-[22rem] font-poppins px-[24px] mt-[2px] bg-transparent outline-none  text-purple-500 font-medium text-[16px]"
        {...rest}
      />
    </>
  );
}
