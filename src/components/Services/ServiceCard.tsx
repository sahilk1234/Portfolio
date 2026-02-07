import Image from "next/image";
import TechBadge from "../UI/TechBadge";

interface ServiceCardTypes {
  icon: string;
  title: string;
  shortDescription: string;
  stack?: string[];
}

const ServiceCard: React.FC<ServiceCardTypes> = ({
  title,
  shortDescription,
  icon,
  stack = [],
}) => {
  return (
    <div className="bg-secondary border-border group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_30px_-24px_rgba(0,0,0,0.6)]">
      <span className="bg-accent/10 pointer-events-none absolute -right-10 -top-10 size-24 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <div className="bg-primary border-border text-accent flex size-12 items-center justify-center rounded-xl border shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5">
          <Image src={icon} alt={title} className="size-7" />
        </div>
        <div className="flex-1">
          <h5 className="text-primary-content text-lg font-semibold tracking-wide">
            {title}
          </h5>
          <p className="text-tertiary-content mt-2 text-sm leading-6">
            {shortDescription}
          </p>
        </div>
      </div>
      {stack.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2">
          {stack.map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
