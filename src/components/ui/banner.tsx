"use client";
// Below are the responsive deisgn
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="bg-slate-30 relative flex min-h-screen flex-col overflow-x-hidden font-sans">
      <div className="px-4 sm:px-12 md:px-24 lg:px-40 xl:px-60">
        <div
          className="flex min-h-[400px] flex-col justify-end rounded-md bg-cover bg-center p-6 text-white md:h-120 md:min-h-[480px] md:p-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0wjBYxfeyoJcxAzFWUlk6v_wo51OlwXk8_dcXoFmRHs5O4bIAQXHNEbUWX0DfTybVcLy8dRqx97XSVnaWjLORrcl_XUNv75bcOaHnXFV7lJzCd7GqNmrGb8_E-9vJC1P9GynjAa-qY3oLLaIWX2YA5Rz783zjpq0aeRS-oYAcz8EjdC9tWkvRZXV8hK74JOBbE54T61F6veVQdSWIXFFOB5g2tkNAbzu5f7ICK2-vJaQZvkUiCN4u17xhWYUQQpHKlSa8Fn7Jjs8')",
          }}
        >
          <h1 className="max-w-4xl text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
            Expert Legal Guidance for Your Success
          </h1>
          <p className="mt-3 mb-2 max-w-2xl text-sm opacity-90 sm:text-base md:mt-5 md:mb-5">
            Our team of experienced attorneys is dedicated to providing
            exceptional legal services tailored to your unique needs. We are
            committed to achieving the best possible outcomes for our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
