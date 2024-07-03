"use client";
import {
  ButtonComponent,
  Trainers,
  Footer,
  Gyms,
  Nav,
} from "@/components/shared";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const whyLinks = [
  {
    title: "We support you",
    desc: "Join Ker Active, we've got your back every step of the way!",
    icon: "/support.svg",
  },
  {
    title: "More visibility..",
    desc: "in your fitness career with Ker Active – connect with the largest active community in Nigeria!",
    icon: "/visibility.svg",
  },
  {
    title: "No limits..",
    desc: "to your fitness goals – unleash your full potential with us!",
    icon: "/limit.svg",
  },
];

export default function HomePage() {
  const router = useRouter();
  return (
    <main className='h-full'>
      <section className='min-h-[95vh] bg-banner z-0 relative bg-left-bottom sm:bg-center sm:bg-no-repeat bg-cover'>
        <Nav />
        <article className='px-6 max-w-screen-xl mx-auto py-10 flex flex-row relative justify-between items-end'>
          <header className='max-w-[538px] space-y-4'>
            <h1 className='font-anton leading-[60px] text-[#EBE8E0] text-[60px] sm:leading-[110px] sm:text-[110px]'>
              THE BIGGEST ACTIVE COMMUNITY IN NIGERIA
            </h1>
            <div className='flex flex-row gap-[20px] items-center'>
              <ButtonComponent hasIcon text='CREATE ACCOUNT' />
              <ButtonComponent hasIcon text='JOIN AS A TRAINER' />
            </div>
          </header>

          <div className='text-off-white hidden sm:flex flex-col font-bricolage tracking-[0.72px] max-w-[200px] text-[13.5px]  leading-[14.58px]'>
            <div className='flex flex-row justify-between pr-4'>
              <p>[What is </p>
              <p>Ker Active]</p>
            </div>
            <p>
              Discover your ideal fitness partner at Ker Active, where trainers,
              nutritionists, and coaches empower your journey towards peak
              health.
            </p>
          </div>
        </article>
        <div className='absolute -z-10 -bottom-10 left-[50%] translate-x-[-50%] sm:translate-x-[-40%] w-[350px] h-[350px] sm:w-[750px] sm:h-[700px]'>
          <Image fill src={"/images/girl-on-track.png"} alt='Girl On a track' />
        </div>
      </section>
      <section className='bg-up-rough -mt-56 sm:-mt-40 space-y-[80px] bg-top bg-cover relative z-10 pt-[270px] sm:pt-[160px]'>
        {/* Trainers and Coaches */}
        <section className='px-6 max-w-screen-xl mx-auto flex flex-col gap-[54px]'>
          <header className='flex flex-row items-center justify-between'>
            <h2 className='font-inter text-xl sm:text-3xl font-extrabold'>
              Trainers and Coaches
            </h2>
            <ButtonComponent
              onClick={() => router.push("/trainers")}
              className='font-inter px-6 sm:px-[34px] font-bold h-[35px] sm:h-[55px]'
              text='See all'
            />
          </header>
          <Trainers />
        </section>

        {/* Gyms and studios */}
        <section className='px-6 max-w-screen-xl mx-auto flex flex-col gap-[54px]'>
          <header className='flex flex-row items-center justify-between'>
            <h2 className='font-inter text-xl sm:text-3xl font-extrabold'>
              Gyms and Studios
            </h2>

            <ButtonComponent
              onClick={() => router.push("/gym")}
              className='font-inter px-6 sm:px-[34px] font-bold h-[35px] sm:h-[55px]'
              text='See all'
            />
          </header>
          <Gyms />
        </section>

        {/* BasketBall lady section */}
        <section
          style={{
            backgroundImage: "url('/images/tennis-background.png')",
          }}
          className='pt-[95px] bg-cover px-6 bg-no-repeat pb-[170px] lg:pb-[230px] w-full h-full'
        >
          <div className='w-full h-full flex-col lg:flex-row relative max-w-screen-xl mx-auto flex justify-between'>
            <div className='max-w-[500px] space-y-[58px] z-10'>
              <h2 className='font-anton text-off-white  lg:text-[#EBE8E014] text-[70px] leading-[70px]  lg:sm:text-[128px] lg:tracking-[-4.72px] lg:leading-[120px]'>
                JOIN OUR FAST GROWING FITNESS COMMUNITY
              </h2>
              <ButtonComponent hasIcon text='JOIN OUR COMMUNITY' />
            </div>
            <div className=' hidden lg:block absolute z-0 lg:left-[20%] xl:left-[30%] h-[700px]  w-[900px]'>
              <Image
                fill
                src={"/images/serena-williams.png"}
                alt='Serena Williams'
              />
            </div>
          </div>
        </section>
      </section>

      {/* Why join the ker club */}
      <section className='bg-up-rough flex items-center justify-center relative z-20 -mt-20 pt-20 h-full  sm:bg-no-repeat bg-cover'>
        <div className='max-w-screen-xl mx-auto gap-[56px]  py-20 w-full px-6 flex flex-col'>
          <h2 className='font-anton leading-[60px] text-black text-center text-[60px] sm:leading-[110px] sm:text-[110px]'>
            WHY JOIN THE KER CLUB ?
          </h2>
          <div className='grid gap-[20px] grid-cols-1 sm:grid-cols-3'>
            {whyLinks.map((link) => (
              <article
                key={link.title}
                className='flex sm:gap-[20px] text-[#2D2C2A] font-bricolage flex-col items-center'
              >
                <Image
                  width={50}
                  height={50}
                  src={link.icon}
                  alt={link.title + " Icon"}
                />

                <h3 className='font-extrabold text-lg text-black mt-4'>
                  {link.title}
                </h3>
                <p className=' text-center'>{link.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
