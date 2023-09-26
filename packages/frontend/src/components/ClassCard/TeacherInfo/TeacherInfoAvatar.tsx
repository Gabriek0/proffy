import { ReactNode } from 'react';

interface ClassCardTeacherInfoAvatarProps {
  imageUrl: string;
  alt: string;
}

export function TeacherInfoAvatar({
  imageUrl,
  alt,
}: ClassCardTeacherInfoAvatarProps) {
  return <img src={imageUrl} alt={alt} className="w-[150px] rounded-full" />;
}
