import { ReactNode } from 'react';

interface ClassCardTeacherInfoRootProps {
  children: ReactNode;
}

export function TeacherInfoRoot({ children }: ClassCardTeacherInfoRootProps) {
  return <div className="flex items-center">{children}</div>;
}
