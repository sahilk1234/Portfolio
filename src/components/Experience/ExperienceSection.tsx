import { experienceData } from "@/appData";
import { CheckIcon, Timer } from "@/utils/icons";
import Image from "next/image";
import SectionHeading from "../SectionHeading/SectionHeading";

const ExperienceSection = () => {
  return (
    <section id="experience" className="my-14">
      <SectionHeading
        title="// Experience"
      />

      <div className="relative mt-8">
        <div className="bg-border absolute left-4 top-0 hidden h-full w-px md:block" />
        <div className="space-y-6">
          {experienceData.map((experience, index) => (
            <div
              key={`${experience.role}-${experience.company}-${index}`}
              className="relative md:pl-10"
            >
              <span className="bg-accent absolute left-[10px] top-7 hidden size-3 rounded-full md:block" />
              <div className="bg-secondary border-border rounded-2xl border p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-accent text-xs uppercase tracking-[0.2em]">
                      {experience.label ?? "Experience"}
                    </p>
                    <h3 className="text-primary-content text-lg font-semibold">
                      {experience.role}
                    </h3>
                    <p className="text-tertiary-content text-sm">
                      {experience.company}
                    </p>
                  </div>
                  {experience.period ? (
                    <div className="text-accent flex items-center gap-2 text-sm">
                      <Image src={Timer} alt="Duration" className="size-4" />
                      <span>{experience.period}</span>
                    </div>
                  ) : null}
                </div>
                <p className="text-tertiary-content mt-4 text-sm leading-6"></p>
                {experience.highlights?.length ? (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {experience.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-primary-content flex items-start gap-2 text-sm"
                      >
                        <CheckIcon className="text-accent mt-0.5 size-4 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
