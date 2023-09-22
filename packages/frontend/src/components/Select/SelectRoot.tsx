import { ReactNode } from 'react';

interface SelectRootProps {
  children: ReactNode;
}

export function SelectRoot({ children }: SelectRootProps) {
  return <div className="flex flex-col w-40">{children}</div>;
}
