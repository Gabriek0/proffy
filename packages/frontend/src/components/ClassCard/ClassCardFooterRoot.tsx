import { ReactNode } from 'react';

interface ClassCardFooterRootProps {
  children: ReactNode;
}

export function ClassCardFooterRoot({ children }: ClassCardFooterRootProps) {
  return (
    <div className="mt-8 flex justify-between items-center">{children}</div>
  );
}
