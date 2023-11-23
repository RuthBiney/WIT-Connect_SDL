import { FormEvent, useState } from "react";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    fullName,
    email,
    password,
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <section className="pt-10 space-y-8">
      <h1 className="text-3xl text-center uppercase font-bold text-orange-500">
        Registration Form
      </h1>
      <form className="flex flex-col items-center">
        <div className="w-3/6 border-2 p-6 shadow-lg space-y-6">
          <label className="flex flex-col">
            Full Name
            <input
              type="text"
              className="rounded-xl h-8 border px-4 py-6"
              autoComplete="true"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            Email
            <input
              type="email"
              className="rounded-xl h-8 border px-4 py-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            Password
            <input
              type="password"
              className="rounded-xl h-8 border px-4 py-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            Confirm Password
            <input
              type="password"
              className="rounded-xl h-8 border px-4 py-6"
            />
          </label>
          <button
            className="border py-3 px-8 rounded-xl bg-orange-800 text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUpPage;
