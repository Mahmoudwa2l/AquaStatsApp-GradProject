"use client"; // Ensure client-side rendering

import React from "react";
import Link from "next/link";

const SignInRedirectPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="shadow-lg rounded-lg p-20 gap-8 text-center">
        <h1 className="text-3xl font-semibold">
          Access Restricted
        </h1>
        <p className="mt-2 mb-10">
          Please sign in to access this page.
        </p>
        <Link
          href="/signin"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignInRedirectPage;
