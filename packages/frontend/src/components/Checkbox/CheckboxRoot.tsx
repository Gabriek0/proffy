import { ReactNode } from 'react';

interface CheckboxProps {
  children: ReactNode;
}

export function CheckboxRoot(props: CheckboxProps) {
  return (
    <div className="flex items-center items-top space-x-2 my-4 ">
      {props.children}
    </div>
  );
}
