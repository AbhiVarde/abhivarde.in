import Image from "next/image";
import sanitylogo from "../../../public/sanity.png";
import vercellogo from "../../../public/vercel.svg";
import nextjslogo from "../../../public/next.svg";
import UnmountStudio from "./Unmount";

const Footer = () => {
  return (
    <UnmountStudio>
      <footer className="border-t border-[#718096] mt-44 min-h-full relative">
        <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-12">
          <div className="flex md:flex-row flex-col items-center gap-x-2">
            <h3>Built with:</h3>
            <ul className="flex items-center gap-x-2 text-sm  md:mt-0 mt-3">
              <li>
                <a
                  href="https://sanity.io"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2  hover:underline"
                >
                  <Image
                    src={sanitylogo}
                    width={20}
                    height={20}
                    alt="sanity logo"
                  />
                  Sanity
                </a>
              </li>
              <li>
                <a
                  href="https://nextjs.org"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2  hover:underline"
                >
                  <Image
                    src={nextjslogo}
                    width={20}
                    height={20}
                    alt="nextjs logo"
                  />
                  Next.js 14
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2  hover:underline"
                >
                  <Image
                    src={vercellogo}
                    width={20}
                    height={20}
                    alt="vercel logo"
                  />
                  Vercel
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col lg:items-end items-center lg:text-start text-center">
            <small>
              Copyright &copy; {new Date().getFullYear()} Abhi Varde. All rights
              Reserved.
            </small>
          </div>
        </div>
      </footer>
    </UnmountStudio>
  );
};

export default Footer;
