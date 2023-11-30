import Input from "../components/Input";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Your password should should be at least 8 characters long",
  }),
});

type FormData = z.infer<typeof schema>;

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <section className="pt-10 space-y-8">
      <h1 className="text-3xl font-bold text-center text-orange-500 uppercase">
        Sign In
      </h1>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-5/6 p-6 space-y-6 border-2 shadow-lg md:w-4/6 lg:w-3/6">
          <div>
            <Input label="Email" name="email" register={register} />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email?.message}</p>
            )}
          </div>
          <div>
            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
            />
            <p className="text-sm text-red-500">{errors.password?.message}</p>
          </div>

          <button className="px-8 py-3 text-white bg-orange-800 border rounded-xl">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignInPage;
