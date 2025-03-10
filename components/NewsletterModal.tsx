"use client";
import { subscribeUser } from "@/app/API/ml";
import { useState } from "react";
import cross from "@/public/images/crossicon.png";
import Image from "next/image";

export default function NewsletterModal() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [buttonclosed, setButtonClosed] = useState(false);

  const handlebutton = () => {
    setButtonClosed(true);
  };

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
      setTimeout(() => setButtonClosed(true), 2000);
    }
  };
  return (
    <div>
      {!buttonclosed && (
        <div className="bg-oppabg bg-cover py-5 px-9 z-50 relative shadow-lg flex flex-col gap-3">
          {" "}
          <div className=" flex justify-between text-sm">
            {!errorMessage && !successMessage && (
              <p>Abonne-toi à notre infolettre! </p>
            )}
            {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
            <div className=" absolute top-4 right-4">
              <Image
                src={cross}
                alt="cross"
                width={22}
                height={20}
                onClick={handlebutton}
              />
            </div>
          </div>
          {!errorMessage && !successMessage && (
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex justify-between gap-5  border-b border-black outline-none "
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Courriel"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent outline-none"
              />
              <button
                className=" px-3 py-1 text-sm hover:font-semibold transition-all ease-in-out"
                type="submit"
              >
                m&lsquo;inscrire
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
