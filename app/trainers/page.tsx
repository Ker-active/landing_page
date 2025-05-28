"use client";
import React, { Suspense } from "react";
import { Footer, Nav, Trainers } from "@/components/shared";

function TrainersContent() {
  return (
    <section className="px-6 mt-6 flex flex-col gap-[100px] max-w-screen-xl pb-[50px] mx-auto">
      <Trainers showAll />
    </section>
  );
}

export default function TrainersPage() {
  return (
    <main className="min-h-[100vh] bg-[#AAA79E]">
      <Nav />
      <Suspense
        fallback={
          <section className="px-6 mt-6 flex flex-col gap-[100px] max-w-screen-xl pb-[50px] mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded mb-4 w-1/3"></div>
              <div className="grid grid-cols-auto-fit-three gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-48 bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>
          </section>
        }
      >
        <TrainersContent />
      </Suspense>
      <Footer />
    </main>
  );
}
