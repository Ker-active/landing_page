import { cn } from "@/lib/utils";
import Image from "next/image";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  hasIcon?: boolean;
  spaceBetween?: boolean;
}
export const ButtonComponent = ({
  text,
  className,
  hasIcon,
  spaceBetween,

  ...rest
}: IProps) => {
  return (
    <button
      className={cn(
        "bg-green hover:bg-green/70 transition-all duration-100 flex-row items-center flex h-[50px] sm:h-[60px] rounded-full px-4 sm:px-7 gap-2 sm:gap-7 font-anton text-base sm:text-lg text-white",
        hasIcon && "pr-2 sm:pr-2",
        className
      )}
      {...rest}
    >
      {spaceBetween && <div className='w-2 sm:w-4 opacity-0' />}
      {text}
      {hasIcon && (
        <div className='bg-[#EBE8E0] w-6 h-6 sm:w-9 sm:h-9 grid place-content-center rounded-full'>
          <Image
            width={12}
            height={12}
            alt='Arrow Down Right'
            src={"/arrow-down-right.svg"}
          />
        </div>
      )}
    </button>
  );
};
