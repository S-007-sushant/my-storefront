"use-client";

import React from "react";
import Banner from "@/components/ui/banner";

const Body: React.FC = () => {
  return (
    <div className="mt-10 flex w-auto flex-col items-center px-70">
      <Banner />
    </div>
  );
};

export default Body;

// const LegalSolutions: React.FC = () => {
//   return (
//     <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-slate-50 font-sans">
//       {/* HERO SECTION */}
//       <section
//         className="flex min-h-[480px] flex-col justify-end rounded-md bg-cover bg-center p-10 text-white"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0wjBYxfeyoJcxAzFWUlk6v_wo51OlwXk8_dcXoFmRHs5O4bIAQXHNEbUWX0DfTybVcLy8dRqx97XSVnaWjLORrcl_XUNv75bcOaHnXFV7lJzCd7GqNmrGb8_E-9vJC1P9GynjAa-qY3oLLaIWX2YA5Rz783zjpq0aeRS-oYAcz8EjdC9tWkvRZXV8hK74JOBbE54T61F6veVQdSWIXFFOB5g2tkNAbzu5f7ICK2-vJaQZvkUiCN4u17xhWYUQQpHKlSa8Fn7Jjs8')",
//         }}
//       >
//         <h1 className="text-4xl font-bold">
//           Expert Legal Guidance for Your Success
//         </h1>
//         <p className="mt-2">
//           Our team of experienced attorneys is dedicated to providing
//           exceptional legal services.
//         </p>

//         <button className="mt-4 rounded-lg bg-blue-600 px-5 py-2">
//           Get Started
//         </button>
//       </section>

//       {/* ABOUT */}
//       <section className="p-6">
//         <h2 className="text-xl font-bold">About Our Firm</h2>
//         <p className="mt-2">
//           Elite Partners and Associate is a leading law firm with a proven track
//           record of success.
//         </p>
//       </section>

//       {/* PRACTICE AREAS */}
//       <section className="grid grid-cols-2 gap-4 p-6 md:grid-cols-4">
//         {["Corporate Law", "Litigation", "IP", "Real Estate"].map((area) => (
//           <div key={area} className="rounded-lg bg-white p-4 shadow">
//             <h3 className="font-semibold">{area}</h3>
//           </div>
//         ))}
//       </section>

//       {/* TESTIMONIAL */}
//       <section className="p-6">
//         <h2 className="text-xl font-bold">Client Testimonials</h2>
//         <p className="mt-2">
//           "Legal Solutions provided exceptional service..."
//         </p>
//       </section>

//       {/* CONTACT */}
//       <section className="p-10 text-center">
//         <h2 className="text-2xl font-bold">Contact Us</h2>

//         <div className="mt-4 flex justify-center">
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="rounded-l-lg border p-3"
//           />
//           <button className="rounded-r-lg bg-blue-600 px-4 text-white">
//             Submit
//           </button>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-gray-100 p-6 text-center">
//         <div className="flex justify-center gap-6">
//           <a href="#">Privacy Policy</a>
//           <a href="#">Terms</a>
//         </div>

//         <p className="mt-2">© 2024 Legal Solutions. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default LegalSolutions;
