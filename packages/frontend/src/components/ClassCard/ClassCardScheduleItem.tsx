interface ClassCardScheduleItemProps {
  weekDay: string;
  hour: string;
}

export function ClassCardScheduleItem({
  hour,
  weekDay,
}: ClassCardScheduleItemProps) {
  return (
    <div className="bg-gray-100 rounded w-[120px] p-2 border border-gray-30 mt-4">
      <div className="flex flex-col">
        <span className="text-gray-500">Dia</span>
        <span className="font-bold">{weekDay}</span>
      </div>
      <div>
        <span className="text-gray-500">Horário</span>
        <br />
        <span className="font-bold">{hour}</span>
      </div>
    </div>
  );
}
