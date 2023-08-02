interface InputFormProp {
  type: string;
  label: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  placeholder: string;
}

const InputForm: React.FC<InputFormProp> = ({
  type,
  label,
  name,
  onChange,
  required,
  placeholder,
}) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      ></input>
    </>
  );
};
export default InputForm;
