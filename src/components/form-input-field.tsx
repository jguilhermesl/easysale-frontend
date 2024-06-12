import { Input } from "./ui/input";
import { Paragraph } from "./ui/paragraph";

interface IFormInputFieldProps {
  label: string;
  placeholder?: string;
  description?: string;
  onChange: (value: string) => void;
  value: string;
}

export const FormInputField = ({
  label,
  placeholder,
  description,
}: IFormInputFieldProps) => {
  return (
    <div>
      <Paragraph className="font-medium">{label}</Paragraph>
      <Input placeholder={placeholder} className="mt-2 mb-2" />
      <Paragraph className="text-xs text-muted-foreground">
        {description}
      </Paragraph>
    </div>
  );
};
