interface SelectOptionsProps {
  selectId: string;
  options: string[];
}

export function SelectOptions({ options, selectId }: SelectOptionsProps) {
  return (
    <select
      id={selectId}
      className="
        bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5
       focus:ring-blue-500 focus:border-blue-500 "
    >
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}
