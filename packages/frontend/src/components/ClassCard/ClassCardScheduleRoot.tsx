import { ReactNode } from 'react';

interface ClassCardScheduleRootProps {
  children: ReactNode;
}

export function ClassCardScheduleRoot({
  children,
}: ClassCardScheduleRootProps) {
  return <div className="flex justify-between">{children}</div>;
}
