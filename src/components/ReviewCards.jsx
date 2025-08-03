import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/utils";

export default function ReviewCards() {
  const comments = [
    {
      quote:
        "This platform helped me master front-end development. The structured content and hands-on projects made learning both fun and incredibly effective for my career.",
      name: "Ayesha Malik",
      title: "Frontend Developer",
    },
    {
      quote:
        "Their support team is responsive, the dashboard is intuitive, and the content is regularly updated. Easily one of the best learning experiences I’ve had.",
      name: "Omar Khan",
      title: "Startup Founder",
    },
    {
      quote:
        "As a designer, I really appreciated the clean interface and detailed design-focused modules. This is perfect for both beginners and experienced professionals looking to grow.",
      name: "Sana Iqbal",
      title: "UI/UX Designer",
    },
    {
      quote:
        "Working full-time and studying isn't easy, but this platform gave me the flexibility and depth I needed to grow as a data professional confidently.",
      name: "Ali Raza",
      title: "Data Analyst",
    },
    {
      quote:
        "The content is practical, engaging, and aligned with industry trends. I’ve applied what I learned here directly to projects in my job and freelance work.",
      name: "Fatima Noor",
      title: "Software Engineer",
    },
    {
      quote:
        "I wasn’t sure at first, but after completing two courses, I feel more confident than ever. The real-world applications made a huge difference in understanding.",
      name: "Bilal Shah",
      title: "AI Researcher",
    },
    {
      quote:
        "What sets this apart is how it simplifies complex topics. The tutorials are well-paced and thoughtfully explained, making it ideal for self-paced and serious learning.",
      name: "Mehwish Tariq",
      title: "Full Stack Developer",
    },
    {
      quote:
        "From frontend to backend, every lesson adds value. The blend of theory and hands-on tasks keeps it engaging and useful for real development scenarios.",
      name: "Danish Javed",
      title: "Tech Lead",
    },
    {
      quote:
        "I love how easy it is to revisit material and stay updated. The course community is also active, which makes problem-solving and growth much easier.",
      name: "Hira Naveed",
      title: "App Developer",
    },
    {
      quote:
        "I’ve tried many platforms, but this one truly delivers. Clear structure, expert instructors, and projects that match real-world expectations. Highly recommended for tech learners.",
      name: "Usman Farooq",
      title: "Mentor & DevOps Engineer",
    },
  ];

  return (
    <div className="relative h-[40rem] w-full bg-black flex justify-center items-center flex-col bg-grid-white/[0.2]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
        //   "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="text-center z-50">
        <h2 className="text-neutral-300 text-2xl sm:text-4xl font-extrabold tracking-tight uppercase">
          Hear Our Hormony, Voices of Success.
        </h2>
      </div>

      <div className="mt-20 px-5 sm:px-10">
        <InfiniteMovingCards items={comments} speed="slow" />
      </div>
    </div>
  );
}
