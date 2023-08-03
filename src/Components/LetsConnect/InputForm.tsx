interface InputFormProp {
  type: string;
  label: string;
  name: string;
  required: boolean;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
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
      ></input>
    </>
  );
};
export default InputForm;
