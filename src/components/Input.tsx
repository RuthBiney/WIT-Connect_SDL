import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  name: string;
  type?: "text" | "email" | "number" | "password";
  register: UseFormRegister<T>;
}

const Input = <T extends FieldValues>({
  label,
  name,
  type = "text",
  register,
}: InputProps<T>) => {
  return (
    <label className="flex flex-col">
      {label}
      <input
        type={type}
        className="h-8 px-4 py-6 border rounded-xl"
        autoComplete="true"
        {...register(name as Path<T>)}
      />
    </label>
  );
};

export default Input;
