"use client";

import React, { useState, useEffect } from "react";

export default function Loading() {
  const [timeoutActive, setTimeoutActive] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeoutActive(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return timeoutActive ? (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center font-medium text-xl md:text-2xl">
        Loading...
      </h1>
      <p className="text-center mt-4 font-light">
        Hopefully not for too long :)
      </p>
    </main>
  ) : (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <p className="text-center mt-4 font-light">
        Taking longer than expected. Please try again later.
      </p>
    </main>
  );
}
