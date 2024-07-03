import { ButtonComponent, Footer, Nav } from "@/components/shared";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const SocialMedia = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex flex-row items-center gap-2", className)}>
      <button>
        <Image
          alt='Instagram Icon'
          src='./black-instagram.svg'
          width={41}
          height={41}
        />
      </button>
      <button>
        <Image
          alt='Twitter Icon'
          src='./black-twitter.svg'
          width={41}
          height={41}
        />
      </button>
    </div>
  );
};

export default function ContactPage() {
  return (
    <main className='h-full'>
      <section className='min-h-[80vh] bg-contact-banner  z-0 relative bg-right-bottom sm:bg-center sm:bg-no-repeat bg-cover'>
        <Nav />
      </section>
      <section className='bg-up-rough text-[#2D2C2A] -mt-36 sm:-mt-20 bg-top bg-cover relative z-10 pb-[100px] pt-[120px] sm:pt-[160px]'>
        <div className='max-w-screen-xl space-y-[100px] w-full px-6 mx-auto'>
          <section className='w-full flex flex-col gap-[70px]'>
            <div className='flex-col gap-[40px] sm:flex-row max-w-[1100px] mx-auto w-full flex items-center justify-between'>
              <div className='flex flex-col gap-[20px] items-center'>
                <Image
                  width={50}
                  height={50}
                  alt='Phone Icon'
                  src='./phone.svg'
                />
                <Link
                  className='font-bricolage underline font-semibold text-lg'
                  href='tel:+2349086681564'
                >
                  +2349086681564
                </Link>
              </div>
              <div className='flex flex-col gap-[20px] items-center'>
                <Image
                  width={50}
                  height={50}
                  alt='mail Icon'
                  src='./mail.svg'
                />
                <Link
                  className='font-bricolage underline font-extrabold text-lg'
                  href='mailto:contact@keractive.com'
                >
                  contact@keractive.com
                </Link>
              </div>
            </div>
            <p className='font-bricolage text-lg text-center'>
              At Ker Active, we’re not just a fitness community, we’re your
              dedicated support system, connecting you with top-tier trainers,
              nutritionists, and coaches for your journey to peak health.
            </p>
          </section>
          <section className='flex flex-col sm:flex-row gap-6 justify-between'>
            <header className='w-full flex flex-col justify-between'>
              <h1 className='font-anton text-[56px] leading-[56px] sm:-tracking-[3.94px] sm:text-[112px] sm:leading-[100px]'>
                GET IN TOUCH WITH US
              </h1>
              <SocialMedia className='hidden sm:flex' />
            </header>
            <form className='flex flex-col gap-4 sm:gap-[35px] w-full'>
              <Input
                placeholder='FULL NAME'
                className='rounded-[30px] placeholder:text-[#0A08053D] font-bricolage font-semibold text-sm sm:px-[45px] h-[45px] sm:h-[60px]'
              />
              <Input
                placeholder='Email'
                className='rounded-[30px] placeholder:text-[#0A08053D] font-bricolage font-semibold text-sm sm:px-[45px] h-[45px] sm:h-[60px]'
              />
              <Input
                placeholder='SUBJECT'
                className='rounded-[30px] placeholder:text-[#0A08053D] font-bricolage font-semibold text-sm sm:px-[45px] h-[45px] sm:h-[60px]'
              />
              <Textarea
                placeholder='MESSAGE'
                className='rounded-[30px] resize-none h-[250px] placeholder:text-[#0A08053D] font-bricolage font-semibold text-sm sm:px-[45px] '
              />
              <ButtonComponent
                spaceBetween
                hasIcon
                className='bg-[#2D2C2A] hover:bg-[#2D2C2A] justify-between'
                text='Submit'
              />
            </form>
          </section>
        </div>
      </section>

      <Footer isContactUsPage />
    </main>
  );
}
