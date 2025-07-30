import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border"

export default function HeroSection () {
    return (
        <>
            <div
            className=" py-10 md:py-0 h-auto md:h-[40rem] w-full flex items-center  justify-center flex-col relative mx-auto overflow-hidden"
            >
                <Spotlight fill="white" className="-top-40 left-0 md:-top-20 md:left-60"/>
                <div className=" w-full p-4 relative z-10 text-center">
                    <h1
                    className="py-1 md:py-3 mt-20 md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600"
                    >Level Up Your Tech Skills</h1>
                    <p
                    className="md:mt-4 mt-10 max-w-lg font-normal text-base md:text-lg text-neutral-300 mx-auto"
                    >Unlock your potential with hands-on courses in web development, data science, AI, and more. Whether you're a beginner or looking to upskill, our expert-led programs are designed to help you build real-world projects and stay ahead in the fast-moving tech industry.</p>
                    <div className="md:mt-4 mt-10">
                        <Link href="#">
                            <Button className="bg-[#0A0A0A] text-white" containerClassName=" md:h-16 md:w-40">
                                Explore Courses
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}