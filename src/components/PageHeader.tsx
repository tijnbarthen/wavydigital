import { FadeIn, FadeInStagger } from "./FadeIn";
import { TextGenerateEffect } from "./TextGenerateEffect";

type HeaderProps = {
  title: string;
  subtitle?: string;
  description: string;
};

const PageHeader = ({ title, subtitle, description }: HeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row space-y-10 items-center">
      <div className="w-full md:w-2/3 font-extrabold tracking-tight text-5xl md:text-6xl flex flex-col gap-3">
        <h1>{title}</h1>

        <FadeInStagger className="flex flex-col md:flex-row gap-2">
          <FadeIn>
            <h1 className="from-blue-600 w-fit to-purple-600 bg-clip-text text-transparent bg-gradient-to-r">
              Business.
            </h1>
          </FadeIn>
          <FadeIn>
            <h1 className="from-blue-600 w-fit to-purple-600 bg-clip-text text-transparent bg-gradient-to-r pb-1">
              Savvy.
            </h1>
          </FadeIn>

          <h1 className="flex  items-start text-start">
            <span className="relative h-[1em] xl:mt-0 w-44 overflow-hidden">
              <span className="absolute h-full w-full tracking-tight -translate-y-full animate-slide leading-none text-black dark:text-[#E6E6E6]">
                Ideas.
              </span>
              <span className="absolute h-full w-full tracking-tight -translate-y-full animate-slide leading-none text-black dark:text-[#E6E6E6] [animation-delay:2s]">
                Tech.
              </span>
              <span className="absolute h-full w-full tracking-tight -translate-y-full animate-slide leading-none text-black dark:text-[#E6E6E6] [animation-delay:4s]">
                Code.
              </span>
            </span>
          </h1>
        </FadeInStagger>

        {/* <div className="flex flex-col  md:space-y-0 md:flex-row md:gap-2">
          <h1 className=" from-blue-600 w-fit to-purple-600 bg-clip-text text-transparent bg-gradient-to-r py-1">
            Business.
          </h1>
          <h1 className="from-blue-600 w-fit to-purple-600 bg-clip-text text-transparent bg-gradient-to-r py-1">
            Savvy.
          </h1>
        </div> */}

        {/* <h1 className="from-purple-600 font-extrabold to-blue-600 bg-clip-text text-transparent bg-gradient-to-r text-6xl md:text-7xl  pb-2 tracking-tighter">
          {subtitle}
        </h1> */}
      </div>
      <div className="md:w-1/3 w-full flex flex-col gap-4">
        <p className="text-lg md:text-2xl font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default PageHeader;
