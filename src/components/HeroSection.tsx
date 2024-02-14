import MaxWidthWrapper from "./MaxWidthWrapper";
import { Badge } from "./ui/badge";

const HeroSection = () => {
  return (
    <MaxWidthWrapper className="py-24">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-2/3">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter">
            Wavy Digital.{" "}
          </h1>
          <h1 className="from-purple-600 font-extrabold to-blue-600 bg-clip-text text-transparent bg-gradient-to-r text-6xl md:text-7xl  pb-2 tracking-tighter">
            Your Tech Launchpad.
          </h1>
        </div>
        <div className="md:w-1/3 w-full flex flex-col gap-4">
          <p className="text-2xl font-semibold">
            We're here to catapult your digital dreams into reality, whether
            it's an e-commerce site, a dynamic platform, or any tech marvel in
            between.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        <div className="lg:h-32 h-20 w-full">
          <img
            src="https://images.unsplash.com/photo-1638742385167-96fc60e12f59?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="flex flex-row gap-4">
          <div className="lg:h-32 h-20 w-1/3 relative text-center">
            <img
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhZGllbnR8ZW58MHx8MHx8fDA%3D"
              className="h-full w-full object-cover rounded-3xl"
              alt=""
            />
            <h1 className="text-4xl absolute top-0 left-0 h-full w-full font-bold text-white tracking-tight flex justify-center items-center">
              E-Commerce.
            </h1>
          </div>

          <div className="lg:h-32 h-20 w-full  bg-gradient-to-br  from-indigo-500 rounded-3xl flex justify-center items-center to-pink-500">
            {/* <img
              src="https://images.unsplash.com/photo-1638742385167-96fc60e12f59?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-full w-full object-cover rounded-3xl"
              alt=""
            /> */}

            <h1 className="text-4xl font-bold text-white tracking-tight">
              Web Development.
            </h1>
          </div>
        </div>
        <div className="lg:h-32 h-20 w-full">
          <img
            src="https://images.unsplash.com/photo-1638742385167-96fc60e12f59?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="flex flex-row gap-4">
          <div className="lg:h-32 h-20 w-2/3 relative">
            <h1 className="text-4xl absolute top-0 left-0 h-full w-full font-bold text-white tracking-tight flex justify-center items-center">
              Automations.
            </h1>
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyYWRpZW50fGVufDB8MHwwfHx8MA%3D%3D"
              className="h-full w-full object-cover rounded-3xl"
              alt=""
            />
          </div>
          <div className="lg:h-32 h-20 w-1/3 relative  text-center">
            <h1 className="text-4xl absolute top-0 left-0 h-full w-full font-bold text-white tracking-tight flex justify-center items-center">
              Next.js.
            </h1>
            <img
              src="https://images.unsplash.com/photo-1548350896-fafc317d3ceb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGdyYWRpZW50fGVufDB8MHwwfHx8MA%3D%3D"
              className="h-full w-full object-cover rounded-3xl "
              alt=""
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
