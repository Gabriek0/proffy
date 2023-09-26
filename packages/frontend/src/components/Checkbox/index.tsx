'use client';

import { Checkbox as Check } from '@front/components/ui/checkbox';

interface CheckboxProps {
  label: string;
}

export function Checkbox(props: CheckboxProps) {
  return (
    <div className="flex items-center items-top space-x-2 my-4 ">
      <Check
        id="checkbox"
        className="border-[1px] border-solid border-gray-30"
      />

      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="checkbox"
          className="cursor-pointer text-gray-40 text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {props.label}
        </label>
      </div>
    </div>
  );
}
