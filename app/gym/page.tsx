"use client";
import React, { Suspense } from "react";
import { Footer, Nav, Gyms } from "@/components/shared";

function GymsContent() {
  return (
    <section className="px-6 mt-6 flex flex-col gap-[100px] max-w-screen-xl pb-[50px] mx-auto">
      <Gyms showAll />
    </section>
  );
}

export default function GymsPage() {
  return (
    <main className="min-h-[100vh] bg-[#AAA79E]">
      <Nav />
      <Suspense
        fallback={
          <section className="px-6 mt-6 flex flex-col gap-[100px] max-w-screen-xl pb-[50px] mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded mb-4 w-1/3"></div>
              <div className="grid grid-cols-auto-fit-gym-four gap-8">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-[181px] bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>
          </section>
        }
      >
        <GymsContent />
      </Suspense>
      <Footer />
    </main>
  );
}
