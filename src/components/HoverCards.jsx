import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function HoverCards() {
  const webinars = [
    {
      title: "Mastering React for Modern Web Development",
      description:
        "Learn how to build fast, scalable web apps using React, hooks, and modern tooling.",
      link: "https://example.com/webinar/react-web-development",
    },
    {
      title: "Full-Stack Web Development with Next.js",
      description:
        "Discover how to build full-stack apps with Next.js, from API routes to deployment.",
      link: "https://example.com/webinar/nextjs-fullstack",
    },
    {
      title: "Building High-Performance Mobile Apps with Flutter",
      description:
        "Dive into cross-platform mobile development with Flutter and Dart.",
      link: "https://example.com/webinar/flutter-app-dev",
    },
    {
      title: "Kotlin for Android: Build Smart Mobile Apps",
      description:
        "Explore Android app development using Kotlin, Jetpack Compose, and best practices.",
      link: "https://example.com/webinar/kotlin-android",
    },
    {
      title: "AI in Practice: Building Smart Applications",
      description:
        "Understand how AI can be applied in real-world apps using Python and APIs.",
      link: "https://example.com/webinar/ai-applications",
    },
    {
      title: "Machine Learning for Beginners: From Theory to Code",
      description:
        "A practical introduction to machine learning using Python and scikit-learn.",
      link: "https://example.com/webinar/ml-beginners",
    },
    {
      title: "Deep Learning with TensorFlow: A Hands-On Guide",
      description:
        "Learn to build deep learning models with TensorFlow for image and text processing.",
      link: "https://example.com/webinar/deep-learning-tensorflow",
    },
  ];

  return (
    <div className="bg-neutral-300 dark:bg-[#0F1524]">
      <div className="py-20">
        <div className="text-center">
          <h2 className="text-teal-600 font-semibold uppercase text-lg sm:text-2xl tracking-wide">
            Featured Webinars
          </h2>
          <p className="mt-3 text-black dark:text-white font-extrabold uppercase text-2xl sm:text-4xl tracking-tight">
            Gets some Connections
          </p>
        </div>

        <div className="mt-10">
            <HoverEffect items={webinars} className={'mx-10'} />
        </div>

        <div className="text-center">
          <Link
            href={"#"}
            className="px-3 sm:px-6 py-2 sm:py-4 border border-neutral-600 bg-white hover:bg-gray-200 transition duration-200 rounded"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}
