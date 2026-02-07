import { experienceData } from "@/appData";
import { CheckIcon, Timer } from "@/utils/icons";
import Image from "next/image";
import SectionHeading from "../SectionHeading/SectionHeading";
import { FC, SVGProps } from "react";

const LocationIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 2.25A6.75 6.75 0 0 0 5.25 9c0 4.902 6.086 12.142 6.345 12.436a.6.6 0 0 0 .91 0C12.764 21.142 18.75 13.902 18.75 9A6.75 6.75 0 0 0 12 2.25Zm0 8.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" />
  </svg>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="page-section">
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
              <div className="bg-secondary border-border relative overflow-hidden rounded-2xl border p-6 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.65)]">
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(85,101,232,0.16),transparent_35%),radial-gradient(circle_at_100%_0%,rgba(24,242,229,0.12),transparent_30%)]" />
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-3">
                    {experience.logo && (
                      <a
                        href={experience.website}
                        target="_blank"
                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-white/95 p-2 shadow-sm"
                      >
                        <Image
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      </a>
                    )}
                    <div>
                      <p className="text-accent text-xs uppercase tracking-[0.2em]">
                        {experience.label ?? "Experience"}
                      </p>
                      <h3 className="text-primary-content text-lg font-semibold">
                        {experience.role}
                      </h3>
                      {experience.website ? (
                        <a
                          href={experience.website}
                          target="_blank"
                          className="text-accent text-base underline underline-offset-4"
                        >
                          {experience.company}
                        </a>
                      ) : (
                        <p className="text-tertiary-content text-base">
                          {experience.company}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 md:items-end">
                    {experience.period ? (
                      <div className="flex items-center gap-2 text-base text-primary-content">
                        <Image src={Timer} alt="Duration" className="size-4" />
                        <span>{experience.period}</span>
                      </div>
                    ) : null}
                    {experience.location && (
                      experience.locationUrl ? (
                        <a
                          href={experience.locationUrl}
                          target="_blank"
                          className="text-tertiary-content flex items-center gap-1 rounded-full border border-border/60 bg-primary/70 px-3 py-1 text-sm underline underline-offset-4"
                        >
                          <LocationIcon className="size-4 text-accent" />
                          <span>{experience.location}</span>
                        </a>
                      ) : (
                        <p className="text-tertiary-content flex items-center gap-1 text-sm">
                          <LocationIcon className="size-4 text-accent" />
                          <span>{experience.location}</span>
                        </p>
                      )
                    )}
                  </div>
                </div>
                {experience.highlights?.length ? (
                  <ul className="relative mt-4 grid gap-2 sm:grid-cols-2">
                    {experience.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-primary-content flex items-start gap-2 rounded-xl border border-border/60 bg-primary/60 px-3 py-2 text-base"
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
