import Image from "next/image";
import { profileQuery } from "../../lib/sanity.query";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import { CustomPortableText } from "../components/shared/CustomPortableText";
import Usage from "../components/pages/usage";
import { sanityFetch } from "../../lib/sanity.client";

export const metadata = {
  title: "About | Abhi Varde",
  description:
    "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "About | Abhi Varde",
    description:
      "Learn more about my skills, experience and technical background",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692635746/victoreke/og.png",
  },
};

export default async function About() {
  // Fetch data from Sanity using sanityFetch
  const profile = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  if (!profile) {
    return <div>Loading profile data...</div>; // Handle potential data fetching errors
  }

  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6 mt-32">
      {profile.map((data) => (
        <div key={data._id}>
          <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
            <div className="order-2 lg:order-none">
              <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
                I'm {data.fullName}. I live in {data.location}, where I build
                the future.
              </h1>

              <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
                <PortableText
                  value={data.fullBio}
                  components={CustomPortableText}
                />
              </div>
            </div>

            <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
              <div className="sticky top-10">
                <Image
                  className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                  src={data.profileImage.image}
                  width={400}
                  height={400}
                  quality={100}
                  alt={data.profileImage.alt}
                  placeholder="blur"
                  blurDataURL={data.profileImage.lqip}
                  priority
                />

                <div className="flex flex-col text-center gap-y-4">
                  <div className="flex items-center">
                    <a
                      href="https://abhivarde.tiiny.site/"
                      rel="noreferrer noopener"
                      target="_blank"
                      className="flex items-center justify-center text-center gap-x-2 basis-[100%] dark:bg-primary-bg bg-zinc-100 border border-zinc-200 dark:hover:border-zinc-700 hover:border-zinc-300 rounded-md py-2 text-lg font-incognito font-semibold"
                    >
                      View Resume <BiLinkExternal className="text-base" />
                    </a>
                  </div>

                  <a
                    href={`mailto:${data.email}`}
                    className="flex items-center gap-x-2 hover:text-black dark:hover:text-primary-color"
                  >
                    <BiEnvelope className="text-lg" />
                    {data.email}
                  </a>
                </div>
              </div>
            </aside>
          </section>
          <Usage />
        </div>
      ))}
    </main>
  );
}
