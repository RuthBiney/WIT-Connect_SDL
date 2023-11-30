import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  name: string;
  type?: "text" | "email" | "number" | "password";
  placeholder?: string;
  register: UseFormRegister<T>;
}

const Input = <T extends FieldValues>({
  label,
  name,
  placeholder,
  type = "text",
  register,
}: InputProps<T>) => {
  return (
    <label className="flex flex-col gap-1">
      <span className="font-semibold text-orange-500">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-8 px-4 py-6 border rounded-xl"
        autoComplete="true"
        {...register(name as Path<T>)}
      />
    </label>
  );
};

export default Input;
