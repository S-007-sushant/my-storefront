import React from "react";
import Navbar from "@/components/ui/navbar";
import Body from "@/components/ui/body";
// import LegalSolutions from "@/components/ui/body";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <Navbar />
        <Body />
      </div>
    </div>
  );
}
