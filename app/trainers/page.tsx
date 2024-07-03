import { Footer, Nav, PageHeader, Trainers } from "@/components/shared";

export default function TrainersPage() {
  return (
    <main className='min-h-[100vh] bg-[#AAA79E]'>
      <Nav />
      <section className='px-6 mt-6 flex flex-col gap-[100px] max-w-screen-xl pb-[50px] mx-auto'>
        <PageHeader header='TRAINERS AND COACHES' />
        <Trainers showAll />
      </section>
      <Footer />
    </main>
  );
}
