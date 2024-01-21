import React from "react";
import NameInput from "./components/NameInput";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import ConfirmPasswordInput from "./components/ConfirmPasswordInput";

const SignUp = () => {
  return (
    <section className="flex justify-center items-center py-10 flex-col gap-6 container">
      <main className="w-1/2 rounded-lg px-4 card py-12">
        <h3 className="text-center font-bold tracking-wide">Sign up</h3>
        <form action="/" className="px-14 py-8 text-center">  
          <div className=" flex flex-col gap-4">
            <NameInput />
            <EmailInput />
            <PasswordInput />
            <ConfirmPasswordInput />
          </div>
          <button
            type="submit"
            className="w-full px-6 mt-8 bg-primary py-2 rounded-3xl uppercase text-white font-medium transition-all hover:brightness-95"
          >
            Sign up
          </button>
        </form>
      </main>
    </section>
  );
};

export default SignUp;
