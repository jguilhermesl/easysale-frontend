import { Input } from "./ui/input";
import { Paragraph } from "./ui/paragraph";
import { FieldProps } from "formik";

interface IFormInputFieldProps extends FieldProps {
  label?: string;
  placeholder?: string;
  description?: string;
  className?: string;

}

export const FormInputField = ({
  field,
  form,
  label,
  placeholder,
  description,
  className,
}: IFormInputFieldProps) => {
  return (
    <div className={className}>
      {label && <Paragraph className="font-medium">{label}</Paragraph>}
      <Input
        {...field}
        placeholder={placeholder}
        onChange={field?.onChange}
        value={field?.value}
        className="mt-2 mb-2"
      />
      {description && (
        <Paragraph className="text-xs text-muted-foreground">
          {description}
        </Paragraph>
      )}
     
    </div>
  );
};
