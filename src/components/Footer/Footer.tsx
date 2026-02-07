import { footerLinks } from "@/appData";
import { GithubIcon, GmailIcon, LinkedIn, PhoneIcon } from "@/utils/icons";
import Logo from "../Navbar/Logo";

const Footer = () => {
  return (
    <footer className="bg-secondary relative flex min-h-[560px] flex-col justify-between gap-20 overflow-hidden px-4 py-14 md:p-14">
      <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-accent via-blue-400 to-purple-500" />
      <div className="relative z-20 grid grid-cols-1 items-start gap-20 md:grid-cols-2 md:gap-12">
        <div>
          <h5 className="mb-8 flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-xl bg-primary p-2 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)]">
              <Logo width={30} height={24} />
            </span>
            <span className="text-neutral text-lg font-semibold">
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
              className="text-tertiary-content hover:text-neutral flex items-center gap-2 text-sm font-light transition-colors duration-300"
            >
              <GmailIcon className="size-4" />
              sahilkhadtare29@gmail.com
            </a>
            <a
              href="mailto:skhadtar@buffalo.edu"
              className="text-tertiary-content hover:text-neutral flex items-center gap-2 text-sm font-light transition-colors duration-300"
            >
              <GmailIcon className="size-4" />
              skhadtar@buffalo.edu
            </a>
            <a
              href="tel:+17162923687"
              className="text-tertiary-content hover:text-neutral flex items-center gap-2 text-sm font-light transition-colors duration-300"
            >
              <PhoneIcon className="size-4 text-accent" />
              +1 (716) 292-3687
            </a>
          </div>
          <div>
            <h5 className="text-neutral mb-4 text-lg font-medium">Location</h5>
            <address className="text-tertiary-content flex flex-col text-sm font-light not-italic">
              <span>Buffalo, NY, USA</span>
            </address>
          </div>
          <div>
            <h5 className="text-neutral mb-4 text-lg font-medium">Social</h5>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/sahilk1234"
                target="_blank"
                rel="noreferrer"
                className="text-tertiary-content hover:text-neutral flex items-center gap-2 text-sm font-light transition-colors duration-300"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-white text-[#181717] shadow-[0_8px_18px_-12px_rgba(0,0,0,0.45)]">
                  <GithubIcon className="size-4" />
                </span>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sahil-khadtare-5442981b7/"
                target="_blank"
                rel="noreferrer"
                className="text-tertiary-content hover:text-neutral flex items-center gap-2 text-sm font-light transition-colors duration-300"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2] shadow-[0_8px_18px_-12px_rgba(10,102,194,0.55)]">
                  <LinkedIn className="size-4" />
                </span>
                <span>LinkedIn</span>
              </a>
            </div>
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
