"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
import courses from "@/data/courses.json";

export default function FeatureCards() {
  const featureCourses = courses.coursesData;

  return (
    <div className="h-auto w-full bg-neutral-300 dark:bg-[#0F1524] text-white dark:text-white pb-20 flex flex-col">
      <div className=" mt-20 text-center">
        <p className="text-lg sm:text-2xl font-semibold text-teal-600 uppercase  tracking-wide">
          Featured Courses
        </p>
        <p className="text-2xl sm:text-4xl font-extrabold mt-3 uppercase text-black dark:text-white tracking-tight">
          Learn With The Best
        </p>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
          {featureCourses.map((course) => (
            <div key={course.id} className="flex justify-center mx-10 sm:px-0">
              <BackgroundGradient className="h-full flex flex-col bg-zinc-900 dark:bg-zinc-900 rounded-[22px] overflow-hidden max-w-sm flex-grow">
                <div className="p-4 sm:p-6 flex flex-col text-center items-center flex-grow">
                  <p className="text-lg sm:text-xl mt-4 mb-2 text-neutral-50 dark:text-neutral-200 font-semibold md:font-bold">
                    {course.title}
                  </p>
                  <p className="mb-2 text-sm text-neutral-300 dark:text-neutral-400 flex-grow">
                    {course.detail}
                  </p>
                  <Link href="#" className="">
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
          <Link href={"#"} className="px-4 sm:px-6 py-2 sm:py-4 border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-200 transition duration-200 rounded">
            View All Courses
          </Link>
      </div>
    </div>
  );
}
