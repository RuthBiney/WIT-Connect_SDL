import { FormEvent, useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    email,
    password,
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <section className="pt-10 space-y-8">
      <h1 className="text-3xl font-bold text-center text-orange-500 uppercase">
        Sign In
      </h1>
      <form className="flex flex-col items-center">
        <div className="w-5/6 p-6 space-y-6 border-2 shadow-lg md:w-4/6 lg:w-3/6">
          <label className="flex flex-col">
            Email
            <input
              type="email"
              className="h-8 px-4 py-6 border rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            Password
            <input
              type="password"
              className="h-8 px-4 py-6 border rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button
            className="px-8 py-3 text-white bg-orange-800 border rounded-xl"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignInPage;
