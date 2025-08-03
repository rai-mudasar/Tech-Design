import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

export default function Instructors() {
  const instructors = [
    {
      id: 1,
      name: "Ayesha Khan",
      designation: "Senior Web Development Instructor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Omar Siddiqui",
      designation: "AI & Machine Learning Mentor",
      image: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Sara Iqbal",
      designation: "UI/UX & Graphic Design Specialist",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Bilal Mehmood",
      designation: "Full-Stack App Developer",
      image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Fatima Rehman",
      designation: "Data Science & Analytics Coach",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="relative h-[40rem] w-full flex justify-center items-center overflow-hidden bg-black">
      <WavyBackground
        className={"w-full flex flex-col justify-center items-center pb-15 lg:pb-0"}
      >
        <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold mb-1 sm:mb-3">
          Meet Our Instructors
        </h2>
        <p className="text-white text-[14px] md:text-2xl mb-6">
          Real skills. Real results. Real impact.
        </p>

        <div className="flex flex-row justify-center items-center">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}
