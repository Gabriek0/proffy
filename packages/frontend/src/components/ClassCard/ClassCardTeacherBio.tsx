import { ReactNode } from 'react';

interface ClassCardTeacherBioProps {
  children: ReactNode;
}

export function ClassCardTeacherBio({ children }: ClassCardTeacherBioProps) {
  return <div className="text-gray-700 mt-8">{children}</div>;
}
