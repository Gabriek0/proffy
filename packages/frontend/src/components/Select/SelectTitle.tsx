interface SelectTitleProps {
  title: string;
  labelFor: string;
}

export function SelectTitle({ title, labelFor }: SelectTitleProps) {
  return (
    <label
      htmlFor={labelFor}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {title}
    </label>
  );
}
