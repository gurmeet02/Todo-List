import React from "react";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";

const Login = () => {
  return (
    <section className="flex justify-center items-center py- flex-col gap-6 container">
      <main className="w-1/2 rounded-lg px-4 card py-12">
        <h3 className="text-center font-bold tracking-wide">Login</h3>
        <form action="/" className="px-14 py-8 text-center">
          <div className=" flex flex-col gap-2">
            <EmailInput />
            <PasswordInput />
            <a
              href="/forget-password"
              className="text-primary underline font-medium"
            >
              Forget password
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-6 mt-8 bg-primary py-2 rounded-3xl uppercase text-white font-medium transition-all hover:brightness-95"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <p className="font-medium">
            Don't have an account?{" "}
            <a href="/sign-up" className="text-primary underline">
              Create account
            </a>
          </p>
        </div>
      </main>
    </section>
  );
};

export default Login;
