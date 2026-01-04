import { footerLinks } from "@/appData";
import Logo from "../Navbar/Logo";

const Footer = () => {
  return (
    <footer className="bg-secondary relative flex min-h-[560px] flex-col justify-between gap-20 overflow-hidden px-4 py-14 md:p-14">
      <div className="relative z-20 grid grid-cols-1 items-start gap-20 md:grid-cols-2 md:gap-12">
        <div>
          <h5 className="mb-8 flex items-center gap-2">
            <Logo width={30} height={24} />
            <span className="text-neutral text-lg font-medium">
              Sahil Khadtare
            </span>
          </h5>
          <p className="text-tertiary-content">
            Software engineer and M.S. CSE student focused on full-stack and
            mobile development.
          </p>
        </div>

        <div className="flex flex-wrap gap-8">
          {footerLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="text-tertiary-content hover:text-neutral transition-colors duration-300 hover:underline"
            >
              {link.title}.
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-20 flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-12">
        <div className="space-y-10">
          <div className="flex flex-col">
            <h5 className="text-neutral mb-4 text-lg font-medium">Contact</h5>
            <a
              href="mailto:sahilkhadtare29@gmail.com"
              className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300"
            >
              sahilkhadtare29@gmail.com
            </a>
            <a
              href="mailto:skhadtar@buffalo.edu"
              className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300"
            >
              skhadtar@buffalo.edu
            </a>
            <a
              href="tel:+17162923687"
              className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300"
            >
              +1 (716) 292-3687
            </a>
          </div>
          <div>
            <h5 className="text-neutral mb-4 text-lg font-medium">Location</h5>
            <address className="text-tertiary-content flex flex-col text-sm font-light not-italic">
              <span>Buffalo, NY, USA</span>
            </address>
          </div>
        </div>
        <p className="text-tertiary-content flex flex-col self-end text-xs md:text-right">
          <span>© 2025 Sahil Khadtare</span>
          <span>All rights reserved</span>
        </p>
      </div>

      <div className="bg-neutral/4 absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-[255px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0 md:p-20">
        <div className="bg-neutral/4 size-full rounded-full p-14 md:p-20">
          <div className="bg-neutral/5 size-full rounded-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
