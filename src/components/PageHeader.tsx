import { FadeIn, FadeInStagger } from "./FadeIn";
import { TextGenerateEffect } from "./TextGenerateEffect";

type HeaderProps = {
  title: string;
  subtitle?: string;
  description?: string;
  showSubtitle?: boolean;
  contact?: {
    emailTitle: string;
    emailAdress: string;
    phoneTitle: string;
    openingDays: string;
    phoneNumer: string;
    openingTime: string;
  };
};

const PageHeader = ({
  contact,
  title,
  subtitle,
  description,
  showSubtitle = true,
}: HeaderProps) => {
  return (
    <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row ">
      <div className="w-full md:w-2/3 font-extrabold tracking-tight text-5xl md:text-6xl flex flex-col gap-3">
        <FadeInStagger>
          <FadeIn>
            <h1>{title}</h1>
          </FadeIn>

          {showSubtitle && (
            <div className="flex flex-col md:flex-row gap-2">
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
            </div>
          )}
        </FadeInStagger>

        {/* <div className="flex flex-col  md:space-y-0 md:flex-row md:gap-2">
          <h1 className=" from-blue-600 w-fit to-purple-600 bg-clip-text text-transparent bg-gradient-to-r py-1">
            Business.
          </h1>
          <h1 className="from-blue-600 w-fit to-purple-600 bg-clip-text text-transparent bg-gradient-to-r py-1">
            Savvy.
          </h1>
        </div> */}

        {/* <h1 className="from-purple-600 font-extrabold to-blue-600 bg-clip-text text-transparent bg-gradient-to-r text-6xl md:text-7xl  pb-2 tracking-tight">
          {subtitle}
        </h1> */}
      </div>

      <FadeInStagger className="md:w-1/3 w-full flex flex-col  gap-4 md:text-end tracking-tight text-2xl font-medium">
        {contact && contact.emailAdress && contact.emailTitle && (
          <>
            <div className="flex flex-col space-y-1">
              <FadeIn>
                <p className="text-muted-foreground">{contact?.emailTitle}</p>
              </FadeIn>
              <FadeIn>
                <p>{contact?.emailAdress}</p>
              </FadeIn>
            </div>
            <div className="flex flex-col space-y-1">
              <FadeIn>
                <p className="text-muted-foreground">{contact?.phoneTitle}</p>
              </FadeIn>
              <FadeIn>
                <p>{contact?.phoneNumer}</p>
              </FadeIn>
              <FadeIn>
                <p>{contact?.openingDays}</p>
              </FadeIn>
              <FadeIn>
                <p>{contact?.openingTime}</p>
              </FadeIn>
            </div>
          </>
        )}
        <p className="text-lg md:text-2xl font-semibold">{description}</p>
      </FadeInStagger>
    </div>
  );
};

export default PageHeader;
