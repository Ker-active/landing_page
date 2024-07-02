import Image from "next/image";
import { ButtonComponent } from "./button-component";
import Link from "next/link";
import { ScrollToTop } from "./scroll-to-top-button";
import { cn } from "@/lib/utils";

const links = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "TRAINERS",
    href: "/contact",
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

interface IProps {
  isContactUsPage?: boolean;
}

export const Footer = ({ isContactUsPage = false }: IProps) => {
  console.log("isContactUsPage", isContactUsPage);
  return (
    <footer className='w-full text-white/60  pb-[70px] bg-[#161717]'>
      <div className='max-w-screen-xl mx-auto px-6'>
        {!isContactUsPage && (
          <div className='flex flex-col py-[100px] sm:py-[200px] justify-center items-center gap-[100px]'>
            <p>Let&apos;s talk</p>
            <div className='relative w-full  h-[50px] sm:h-[130px] max-w-[1000px]'>
              <Image
                fill
                src={"/images/ker-footer-logo.png"}
                alt='Ker Active Logo'
              />
            </div>
            <ButtonComponent className='h-[48px]' hasIcon text='GET IN TOUCH' />
          </div>
        )}

        <section
          className={cn(
            "grid font-bricolage gap-8 grid-cols-2 sm:grid-cols-4",
            isContactUsPage && "pt-[100px]"
          )}
        >
          <div className='flex gap-4 flex-col'>
            <Image
              src={"/images/ker-footer-logo.png"}
              width={144}
              height={19}
              alt='Ker Active Logo'
            />
            <Link
              href='/'
              className='flex  text-sm tracking-[0.5px] gap-4 flex-row items-center'
            >
              <Image
                alt='Instagram Icon'
                width={32}
                height={32}
                src='/instagram.svg'
              />{" "}
              INSTAGRAM
            </Link>
            <Link
              href='/'
              className='flex  text-sm tracking-[0.5px] gap-4 flex-row items-center'
            >
              <Image
                alt='Twitter Icon'
                width={32}
                height={32}
                src='/twitter.svg'
              />{" "}
              X (formerly Twitter)
            </Link>
          </div>
          <div className='flex gap-6 flex-col'>
            <p className='text-xl'>PAGES</p>
            <ul className='flex flex-col gap-4 '>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='flex font-bricolage text-sm tracking-[0.5px] gap-4 flex-row items-center'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <form className='flex flex-col max-w-[420px]  col-span-2 gap-[11px]'>
            <label
              className='font-anton text-[28px] text-off-white leading-[28px] '
              htmlFor='email'
            >
              SUBSCRIBE TO OUR NEWSLETTER
            </label>
            <div className='bg-[#008080] py-2 rounded-full px-4 flex items-center flex-row'>
              <input
                className='h-full outline-none text-off-white placeholder:text-off-white w-full  font-anton bg-transparent'
                placeholder='EMAIL'
                type='email'
                id='email'
                name='email'
              />
              <button className='h-[35px] flex flex-row justify-center items-center text-off-white text-lg   font-anton rounded-full gap-2 bg-[#2D2C2A] min-w-[101px]'>
                SUBMIT
                <div className='grid place-items-center rounded-full w-6 h-6 bg-off-white'>
                  <Image
                    src='/arrow-down-right-black.svg'
                    width={10}
                    height={10}
                    alt='Arrow Icon'
                  />
                </div>
              </button>
            </div>
          </form>
        </section>
        {!isContactUsPage && <ScrollToTop />}
      </div>
    </footer>
  );
};
