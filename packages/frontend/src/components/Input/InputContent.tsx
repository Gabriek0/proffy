import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export function InputContent({ name, label, ...rest }: InputProps) {
  const [inputValue, setInputValue] = useState<string>('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <hr className="absolute group-focus-within:left-[-1px] group-focus-within:h-[48px] group-focus-within:w-[2px] group-focus-within:rounded-[8px] group-focus-within:bg-purple-300 group-focus-within:top-[.85rem]" />

      <label
        htmlFor={name}
        className={twMerge(
          `absolute text-gray-40 text-[18px] leading[24px] font-normal top-[24px] bottom-0 mx-auto left-[24px] group-focus-within:top-[8px] group-focus-within:text-[14px] group-focus-within:text-gray-50, ${
            inputValue && 'top-[8px] text-[14px] text-gray-50'
          }`
        )}
      >
        {label}
      </label>
      <input
        name={name}
        value={inputValue}
        onChange={handleChange}
        className="h-[4.5rem] w-[22rem] min-w-[280px] font-poppins px-[24px] mt-[2px] bg-transparent outline-none  text-purple-500 font-medium text-[16px] sm:w-full"
        {...rest}
      />
    </>
  );
}
