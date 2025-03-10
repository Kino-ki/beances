"use client";
import { subscribeUser } from "@/app/API/ml";
import { useState } from "react";

export default function NewsletterInput() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const result = await subscribeUser(email);

    if (result.error) {
      setErrorMessage(result.error);
    } else {
      setSuccessMessage(result.success || "");
      setEmail("");
    }
  };
  return (
    <div className="flex gap-2 text-sm md:flex-row md:justify-center justify-between flex-col ">
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}

      {!errorMessage && !successMessage && (
        <div className="flex gap-2 text-sm md:flex-row md:justify-center justify-between flex-col ">
          <div className="flex justify-center lg:justify-end">
            <p className="lg:w-[60%] md:py-0 py-3 flex md:text-sm">
              Rejoins notre infolettre!
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex justify-between  mx-5 gap-2 border-b border-black"
          >
            <input
              className="  outline-none p-1 md:w-60 bg-transparent "
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className=" p-1 px-2 rounded-sm text-sm hover:font-semibold transition-all ease-in-out "
              type="submit"
            >
              M&lsquo;inscrire
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
