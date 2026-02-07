"use client";

import { Testimonial } from "@/lib/types";
import { LinkedIn } from "@/utils/icons";
import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import TestimonialCard from "./TestimonialCard";

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
}) => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section id="testimonials" className="page-section">
      <SectionHeading title="// LinkedIn Recommendations" />
      <div className="mt-4">
        <a
          href="https://www.linkedin.com/in/sahil-khadtare-5442981b7/#recommendations"
          target="_blank"
          rel="noreferrer"
          className="text-accent inline-flex items-center gap-2 text-base underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          <LinkedIn className="size-4" />
          <span>View on LinkedIn</span>
        </a>
      </div>

      <div className="my-8 flex gap-6 overflow-x-auto pb-4">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={idx}
            id={`testimonial-${idx}`}
            testimonial={testimonial}
            handleActiveCard={() => {
              setActiveCard(idx);
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            type="button"
            key={idx}
            aria-label={`Go to testimonial ${idx + 1}`}
            onClick={() => {
              setActiveCard(idx);
              document
                .getElementById(`testimonial-${idx}`)
                ?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            }}
            className={`transition-all ${
              idx === activeCard
                ? "bg-accent size-3.5"
                : "bg-white/50 size-2.5 hover:bg-accent/60"
            } rounded-full`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
