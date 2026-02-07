import { Project } from "@/lib/types";
import Image from "next/image";
import {
  Earning,
  GithubIcon,
  Likes,
  PreviewIcon,
  Star,
  Timer,
} from "../../utils/icons";
import TechBadge from "../UI/TechBadge";

const IconText: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <li className="flex gap-2">
    <Image src={icon} alt={text} className="size-[18px] md:size-5" />
    <span className="text-neutral text-sm">{text}</span>
  </li>
);

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const {
    title,
    shortDescription,
    visitors,
    earned,
    ratings,
    githubStars,
    numberOfSales,
    livePreview,
    githubLink,
    siteAge,
    type,
    cover,
    stack = [],
  } = data;

  const bulletPoints = shortDescription
    .split("•")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <article className="relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border/70 bg-secondary/95 p-5 shadow-[0_22px_60px_-32px_rgba(0,0,0,0.75)] transition-all duration-200 hover:-translate-y-1 hover:border-accent/80 hover:shadow-[0_30px_70px_-36px_rgba(0,0,0,0.8)]">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(85,101,232,0.22),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(24,242,229,0.18),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(15,23,42,0.32),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-accent/8" />

      {cover && (
        <figure className="relative overflow-hidden rounded-2xl border border-border/70 bg-primary">
          <Image
            src={cover}
            width={800}
            height={320}
            alt="Project Cover"
            className="h-40 w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
        </figure>
      )}

      <header className="relative flex items-start justify-between gap-3">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-secondary-content text-xl font-semibold md:text-2xl">
              {title}
            </h3>
            {type && (
              <span className="rounded-lg border border-border/60 bg-primary/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                {type}
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {siteAge && (
              <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-tertiary-content">
                {siteAge}
              </span>
            )}
            {(visitors || numberOfSales) && (
              <span className="text-neutral flex items-center gap-2 rounded-full border border-border/70 bg-primary/70 px-3 py-1 text-xs font-medium">
                <Image src={Likes} alt="Users" className="size-4" />
                <span>{(visitors || numberOfSales)?.toString()}</span>
              </span>
            )}
            {earned && (
              <span className="text-neutral flex items-center gap-2 rounded-full border border-border/70 bg-primary/70 px-3 py-1 text-xs font-medium">
                <Image src={Earning} alt="Earned" className="size-4" />
                <span>{earned}</span>
              </span>
            )}
            {(ratings || githubStars) && (
              <span className="text-neutral flex items-center gap-2 rounded-full border border-border/70 bg-primary/70 px-3 py-1 text-xs font-medium">
                <Image src={Star} alt="Rating" className="size-4" />
                <span>{(ratings || githubStars)?.toString()}</span>
              </span>
            )}
          </div>
        </div>
      </header>

      <div className="relative flex-1 overflow-hidden rounded-2xl border border-border/60 bg-primary/85 px-4 py-4 backdrop-blur-sm">
        {bulletPoints.length > 1 ? (
          <ul className="space-y-2 text-[15px] leading-7 text-primary-content/95 md:text-base">
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-2 block h-2 w-2 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[15px] leading-7 text-primary-content/95 md:text-base">
            {shortDescription}
          </p>
        )}
      </div>

      {stack.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      )}

      <footer className="relative flex flex-wrap items-center gap-3 text-sm md:text-base">
        {livePreview && (
          <a
            href={livePreview}
            className="text-accent flex items-center gap-2 rounded-full border border-accent/50 px-3 py-1.5 transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            target="_blank"
          >
            <PreviewIcon className="h-auto w-[18px] md:w-5" />
            <span>Live Preview</span>
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            className="text-accent flex items-center gap-2 rounded-full border border-accent/50 px-3 py-1.5 transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            target="_blank"
          >
            <GithubIcon className="w-[18px] md:w-5" />
            <span>GitHub</span>
          </a>
        )}
      </footer>
    </article>
  );
};

export default ProjectCard;
