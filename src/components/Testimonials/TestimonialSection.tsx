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
    <section id="testimonials">
      <SectionHeading title="// LinkedIn Recommendations" />
      <div className="mt-4">
        <a
          href="https://www.linkedin.com/in/sahil-khadtare-5442981b7/#recommendations"
          target="_blank"
          rel="noreferrer"
          className="text-accent inline-flex items-center gap-2 text-sm underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          <LinkedIn className="size-4" />
          <span>View on LinkedIn</span>
        </a>
      </div>

      <div className="my-8 flex gap-6 overflow-x-auto pb-4">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={idx}
            testimonial={testimonial}
            handleActiveCard={() => {
              setActiveCard(idx);
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-1 sm:hidden">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`${idx === activeCard ? "bg-accent size-[12px]" : "size-[10px] bg-white/50"} rounded-full`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
