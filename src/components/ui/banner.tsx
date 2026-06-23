"use client";
import React, { useState } from "react";

const Banner: React.FC = () => {
  return (
    <div className="bg-slate-30 relative flex min-h-screen flex-col overflow-x-hidden font-sans">
      <div className="p-3">
        <div
          className="flex h-120 min-h-[480px] flex-col justify-end rounded-md bg-cover bg-center p-10 text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0wjBYxfeyoJcxAzFWUlk6v_wo51OlwXk8_dcXoFmRHs5O4bIAQXHNEbUWX0DfTybVcLy8dRqx97XSVnaWjLORrcl_XUNv75bcOaHnXFV7lJzCd7GqNmrGb8_E-9vJC1P9GynjAa-qY3oLLaIWX2YA5Rz783zjpq0aeRS-oYAcz8EjdC9tWkvRZXV8hK74JOBbE54T61F6veVQdSWIXFFOB5g2tkNAbzu5f7ICK2-vJaQZvkUiCN4u17xhWYUQQpHKlSa8Fn7Jjs8')",
          }}
        >
          <h1 className="text-5xl font-bold">
            Expert Legal Guidance for Your Success
          </h1>
          <p className="mt-5 mb-5 text-base">
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
