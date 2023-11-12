interface TeacherInfoClassProps {
  teacherName: string;
  className: string;
}

export function TeacherInfoClass({
  className,
  teacherName,
}: TeacherInfoClassProps) {
  return (
    <div className="flex flex-col ml-8">
      <span className="font-bold text-3xl antialiased tracking-wide">
        {teacherName}
      </span>
      <span className="text-gray-500">{className}</span>
    </div>
  );
}
