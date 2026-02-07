import { educationData } from "@/appData";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";

const EducationSection = () => {
  return (
    <section id="education" className="page-section">
      <SectionHeading title="// Education" />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {educationData.map((item) => (
          <a
            key={item.school}
            href={item.website}
            target="_blank"
            className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/95 p-5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.65)] transition-transform duration-200 hover:-translate-y-1 hover:border-accent/60"
          >
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(85,101,232,0.18),transparent_35%),radial-gradient(circle_at_100%_0%,rgba(24,242,229,0.14),transparent_30%)]" />
            <div className="relative flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {item.logo && (
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-border/60 bg-white/95 p-2 dark:bg-white">
                      <Image
                        src={item.logo}
                        alt={`${item.school} logo`}
                        width={96}
                        height={96}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-secondary-content text-lg font-semibold md:text-xl">
                      {item.school}
                    </h3>
                    <p className="text-tertiary-content text-sm">{item.location}</p>
                  </div>
                </div>
                <span className="text-accent whitespace-nowrap rounded-full border border-border/60 bg-primary/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide">
                  {item.period}
                </span>
              </div>
              <p className="text-primary-content text-sm font-medium md:text-base">
                {item.degree}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
