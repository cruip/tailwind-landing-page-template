import React, { useState } from "react";
import Spinner from "../utils/Spinner";

const fetchRoomCode = async (email) => {
  let response = await fetch(
    `http://mashimashi.herokuapp.com/api/generateCode?email=${email}`
  );
  let { code } = await response.json();
  return code;
};

const ApplicationForm = () => {
  const [roomCode, setRoomCode] = useState(undefined);
  const [copied, setCopied] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roomUrl =
    roomCode === undefined
      ? undefined
      : `https://mashimashi.herokuapp.com/rooms/${roomCode}/landing`;

  return (
    <form
      className="font-sans"
      onSubmit={async (e) => {
        e.preventDefault();

        if (roomUrl === undefined) {
          const email = e.target.elements.email.value;
          if (!email || isLoading) {
            return;
          }
          setHasError(false);
          setIsLoading(true);
          try {
            let code = await fetchRoomCode(email);
            setRoomCode(code);
          } catch (error) {
            console.log(error);
            setHasError(true);
          }
          setIsLoading(false);
        } else {
          window.location.href = roomUrl;
        }
      }}
    >
      <div className="flex flex-wrap mb-4">
        <div className="w-full">
          <label className="block text-sm sr-only" htmlFor="newsletter">
            Email
          </label>
          <div className="relative flex items-center max-w-sm gap-x-6">
            {roomCode !== undefined ? (
              <div className="flex flex-row">
                {[...roomCode].map((c, index) => {
                  return (
                    <div
                      key={`input_${c}`}
                      className="drop-shadow-lg bg-white text-gray-800 text-lg mr-4 rounded-lg px-5 py-4"
                    >
                      {c}
                    </div>
                  );
                })}
              </div>
            ) : isLoading ? (
              <Spinner />
            ) : (
              <input
                id="email"
                type="email"
                className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                placeholder="Your email"
                required
              />
            )}
            <button
              type="submit"
              className="bg-couplerTitle text-white px-3 py-2 rounded-lg whitespace-nowrap"
              aria-label="Subscribe"
            >
              {roomCode === undefined ? "Generate Code" : "Try it out"}
            </button>
          </div>
          {roomCode && (
            <p className="mt-8 text-sky-800 text-sm text-center">
              <button
                className="underline"
                onClick={async (e) => {
                  e.preventDefault();
                  await navigator.clipboard.writeText(roomUrl);
                  setCopied(true);
                }}
              >
                {copied ? "The URL is copied!" : "Share the link of your space"}
              </button>
            </p>
          )}
          {hasError && (
            <p className="mt-8 text-red-800 text-sm text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ApplicationForm;