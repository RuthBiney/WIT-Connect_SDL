import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
type inputType = {
  label: string;
  value: keyof FormData;
  type: "text" | "password" | "email" | "number";
};
const inputs: inputType[] = [
  { label: "First Name", value: "firstName", type: "text" },
  { label: "Last Name", value: "lastName", type: "text" },
  { label: "Email", value: "email", type: "email" },
  { label: "Password", value: "password", type: "password" },
  { label: "Confirm Password", value: "confirmation", type: "password" },
];

const schema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: "Your first name must be at least 3 characters" }),
    lastName: z
      .string()
      .min(3, { message: "Your last name must be at least 3 characters" }),
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Your password should be at least 8 characters long",
    }),
    confirmation: z.string(),
  })
  .refine((data) => data.password === data.confirmation, {
    message: "Passwords don't match",
    path: ["confirmation"],
  });

type FormData = z.infer<typeof schema>;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <section className="pt-10 space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl font-bold text-center text-orange-500 uppercase">
        Create an account
      </h1>
      <form className="flex flex-col items-center">
        <div className="p-6 space-y-6 border-2 shadow-lg lg:w-3/6">
          {inputs.map(({ label, value, type }) => (
            <div>
              <Input
                key={value}
                label={label}
                type={type}
                name={value}
                register={register}
              />
              {errors[value] && (
                <p className="text-sm text-red-500">{errors[value]?.message}</p>
              )}
            </div>
          ))}
          <button className="px-8 py-3 text-white bg-orange-800 border rounded-xl">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUpPage;
