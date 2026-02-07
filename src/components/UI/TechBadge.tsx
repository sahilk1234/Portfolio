import { getTechIconRef, TechIconRef } from "@/utils/techIcons";

type TechBadgeProps = {
  label: string;
};

const TechBadge: React.FC<TechBadgeProps> = ({ label }) => {
  const iconRef = getTechIconRef(label);
  return (
    <span className="bg-primary border-border text-primary-content inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_8px_16px_-12px_rgba(0,0,0,0.65)] sm:text-sm">
      {iconRef && renderIcon(iconRef)}
      <span>{label}</span>
    </span>
  );
};

const renderIcon = (icon: TechIconRef) => {
  if (icon.type === "class") {
    const isNext = icon.value.toLowerCase().includes("nextjs");

    return (
      <span
        className={`inline-flex size-5 items-center justify-center ${
          isNext ? "rounded-sm bg-white px-1 dark:bg-white" : ""
        }`}
      >
        <i
          aria-hidden="true"
          className={`${icon.value} text-base leading-none ${
            isNext ? "text-black" : ""
          }`}
        />
      </span>
    );
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-4 shrink-0"
      fill={icon.hex ? `#${icon.hex}` : "currentColor"}
    >
      <path d={icon.path} />
    </svg>
  );
};

export default TechBadge;
