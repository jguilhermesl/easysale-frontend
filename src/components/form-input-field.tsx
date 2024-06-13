import { Input } from "./ui/input";
import { Paragraph } from "./ui/paragraph";

interface IFormInputFieldProps {
  label?: string;
  placeholder?: string;
  description?: string;
  onChange: (value: string) => void;
  value: string;
  className?: string;
}

export const FormInputField = ({
  label,
  placeholder,
  description,
  className,
}: IFormInputFieldProps) => {
  return (
    <div className={className}>
      {label && <Paragraph className="font-medium">{label}</Paragraph>}
      <Input placeholder={placeholder} className="mt-2 mb-2" />
      {description && (
        <Paragraph className="text-xs text-muted-foreground">
          {description}
        </Paragraph>
      )}
    </div>
  );
};
