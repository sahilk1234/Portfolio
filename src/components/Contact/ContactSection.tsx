import { MsgIcon, PhoneIcon } from "@/utils/icons";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="page-section bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12"
    >
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">Let&apos;s Talk</h3>
          <h4 className="text-accent text-2xl font-bold md:text-3xl">
            Open to opportunities
          </h4>
          <p className="text-neutral mt-8">
            Based in Buffalo, I build full-stack and mobile applications with
            React, Next.js, and Node.js.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          <a
            href="mailto:sahilkhadtare29@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300"
          >
            <MsgIcon /> sahilkhadtare29@gmail.com
          </a>
          <a
            href="mailto:skhadtar@buffalo.edu"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300"
          >
            <MsgIcon /> skhadtar@buffalo.edu
          </a>
          <a
            href="tel:+17162923687"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300"
          >
            <PhoneIcon /> +1 (716) 292-3687
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  );
};

export default ContactSection;
