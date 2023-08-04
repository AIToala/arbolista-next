import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

interface InputsFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface InputFieldProps {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  placeholder: string;
}

interface InputAreaFieldProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  label: string;
  placeholder: string;
}

interface SelectFieldProps {
  onValueChange: (selectedValue: string) => void;
  label: string;
  placeholder: string;
  optionsList: Array<{ value: string; displayText: string }>;
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  id,
  label,
  placeholder,
}) => (
  <div className="space-y-1" style={{ marginBottom: "20px" }}>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} placeholder={placeholder} onChange={onChange} />
  </div>
);

export const InputsField: React.FC<InputsFieldProps> = ({
  id,
  label,
  placeholder,
}) => (
  <div className="space-y-1" style={{ marginBottom: "20px" }}>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} placeholder={placeholder} />
  </div>
);

export const TextAreaField: React.FC<InputAreaFieldProps> = ({
  onChange,
  id,
  label,
  placeholder,
}) => (
  <div className="space-y-1" style={{ marginBottom: "20px" }}>
    <Label htmlFor={id}>{label}</Label>
    <Textarea id={id} placeholder={placeholder} onChange={onChange} />
  </div>
);

export const FileInputField: React.FC<InputsFieldProps> = ({
  id,
  label,
  placeholder,
}) => (
  <div
    className="file-upload-field "
    id="fileUpload"
    style={{ marginBottom: "20px" }}
  >
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type="file" accept=".jpeg" placeholder={placeholder} />
  </div>
);

export const SelectField: React.FC<SelectFieldProps> = ({
  onValueChange,
  label,
  placeholder,
  optionsList,
}) => (
  <div className="space-y-1" style={{ marginBottom: "20px" }}>
    <Label>{label}</Label>
    <Select onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {optionsList.map((option, index) => (
          <SelectItem key={index} value={option.value}>
            {option.displayText}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export const PasswordInputField: React.FC<InputsFieldProps> = ({
  id,
  label,
  placeholder,
}) => (
  <div className="space-y-1" style={{ marginBottom: "20px" }}>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} placeholder={placeholder} type="password" />
  </div>
);
