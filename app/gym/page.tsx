"use client";
import React from "react";

import { Footer, Nav, Gyms } from "@/components/shared";

export default function GymsPage() {
  return (
    <main className="min-h-[100vh] bg-[#AAA79E]">
      <Nav />
      <section className="px-6 mt-6 flex flex-col gap-[100px] max-w-screen-xl pb-[50px] mx-auto">
        <Gyms showAll />
      </section>
      <Footer />
    </main>
  );
}
