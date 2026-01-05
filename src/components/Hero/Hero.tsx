"use client";
import useRoleSwitcher from "@/hooks/useRoleSwitcher";
import useRotatingAnimation from "@/hooks/useRotatingAnimation";
import { GithubIcon, LinkedIn } from "@/utils/icons";
import Image from "next/image";
import { HeroImage } from "../../utils/images";
import Ellipse from "./Ellipse";

const Hero = () => {
  const ellipseRef = useRotatingAnimation();
  const role = useRoleSwitcher({
    roles: ["SOFTWARE ENGINEER", "FULL-STACK DEVELOPER", "M.S. CSE STUDENT"],
  });

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">
              Hi, I&apos;m Sahil Khadtare
            </span>
            <span className="text-accent block text-[1.75rem] font-bold">
              {role}
            </span>
          </h1>

          <h2 className="text-neutral mt-3">
            Software engineer with 3 years of experience building scalable web
            and mobile products.
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="#contact"
              aria-label="Contact Sahil"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]"
            >
              Contact
            </a>
            <a
              href="mailto:sahilkhadtare29@gmail.com"
              aria-label="Email Sahil"
              className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm"
            >
              Email Me
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <a
              href="https://github.com/sahilk1234"
              aria-label="Visit Sahil's GitHub profile"
              target="_blank"
              rel="noreferrer"
              className="text-neutral bg-secondary border-border hover:text-accent flex items-center gap-2 rounded-lg border px-3 py-2 transition-colors duration-200"
            >
              <GithubIcon className="size-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-khadtare-5442981b7/"
              aria-label="Visit Sahil's LinkedIn profile"
              target="_blank"
              rel="noreferrer"
              className="text-neutral bg-secondary border-border hover:text-accent flex items-center gap-2 rounded-lg border px-3 py-2 transition-colors duration-200"
            >
              <LinkedIn className="size-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="Sahil Khadtare - Software Engineer"
              className="object-contain p-7"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
