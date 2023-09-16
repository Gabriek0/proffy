interface SelectTitleProps {
  title: string;
  labelFor: string;
}

export function SelectTitle({ title, labelFor }: SelectTitleProps) {
  return (
    <label
      htmlFor={labelFor}
      className="block text-sm font-medium text-gray-300 mb-1"
    >
      {title}
    </label>
  );
}
