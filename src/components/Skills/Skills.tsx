import { ChevronRightIcon } from "@/utils/icons";
import SectionHeading from "../SectionHeading/SectionHeading";

type SkillGroup = {
  title: string;
  items: string[];
};

type SkillsProps = {
  skills: SkillGroup[];
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="my-14">
      <div className="mx-auto max-w-[1200px] px-4">
        <SectionHeading
          title="// Skills"
          subtitle="Grouped by focus area so the full stack stays easy to scan."
        />

        <div className="relative mt-8">
          <div className="bg-marquee pointer-events-none absolute -inset-6 rounded-3xl opacity-20 blur-3xl" />

          <div className="relative space-y-4">
            {skills.map((group, index) => (
              <details
                key={group.title}
                open={index === 0}
                className="group bg-secondary border-border relative overflow-hidden rounded-2xl border p-5 transition-shadow duration-200 open:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)]"
              >
                <span className="bg-accent pointer-events-none absolute -right-12 -top-12 size-32 rounded-full opacity-10 blur-3xl" />
                <summary className="text-primary-content flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold tracking-wide transition-colors duration-200 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-3">
                    <span className="bg-accent h-9 w-1.5 rounded-full" />
                    <span>{group.title}</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-tertiary-content hidden items-center gap-2 text-xs uppercase tracking-[0.2em] sm:inline-flex">
                      <span className="text-accent">{group.items.length}</span>
                      <span>items</span>
                    </span>
                    <span className="bg-primary border-border text-accent flex size-9 items-center justify-center rounded-full border transition-transform duration-200 group-open:rotate-90">
                      <ChevronRightIcon className="size-4" />
                    </span>
                  </span>
                </summary>

                <div className="mt-4 flex flex-wrap gap-2 font-inter">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="bg-primary border-border text-primary-content rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_8px_16px_-12px_rgba(0,0,0,0.65)] sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
