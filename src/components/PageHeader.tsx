import { TextGenerateEffect } from "./TextGenerateEffect";

type HeaderProps = {
  title: string;
  subtitle: string;
  description: string;
};

const PageHeader = ({ title, subtitle, description }: HeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center">
      <div className="w-full md:w-2/3">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter">
          {title}
        </h1>
        <TextGenerateEffect
          words={"Business. Savvy."}
          className="from-purple-600 font-extrabold to-blue-600 bg-clip-text text-transparent bg-gradient-to-r text-6xl md:text-7xl  pb-2 tracking-tighter"
        />

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
