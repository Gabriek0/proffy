import { Checkbox as Box } from '@front/components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';

interface CheckboxProps {
  checked: boolean;
  onCheckChange: (checked: CheckedState) => void;
}

export function Checkbox(props: CheckboxProps) {
  return (
    <Box
      id="checkbox"
      checked={props.checked}
      onCheckedChange={props.onCheckChange}
      className="border-[1px] border-solid border-gray-30"
    />
  );
}
