interface SelectOptionsProps {
  selectId: string;
  options: string[];
}

export function SelectOptions({ options, selectId }: SelectOptionsProps) {
  return (
    <select
      id={selectId}
      className="max-w-xs border rounded bg-white border-gray-20 text-sm outline-0 py-2 min-w-[200px] text-gray-400"
    >
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}
