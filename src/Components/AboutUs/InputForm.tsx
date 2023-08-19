interface InputFormProp {
  type: string;
  label: string;
  name: string;
  required: boolean;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputFormProp> = ({
  type,
  label,
  name,
  required,
  placeholder,
  minLength,
  maxLength,
  pattern,
  className,
  onChange,
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        className={className}
        onChange={onChange}
      ></input>
    </>
  );
};

export default InputForm;
