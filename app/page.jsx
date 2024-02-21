"use client";
import { useState, useEffect } from "react";
import { profileQuery } from "../lib/sanity.query";
import Job from "./components/pages/Job";
import { sanityFetch } from "../lib/sanity.client";
import Slide from "./animation/Slide";
import Social from "./components/shared/Social";
import HeroSvg from "./icons/HeroSvg";

export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProfile = await sanityFetch({
          query: profileQuery,
          tags: ["profile"],
        });
        setProfile(fetchedProfile);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-36 md:mt-32 mt-28">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        {profile &&
          profile.map((data) => (
            <>
              <div key={data._id} className="lg:max-w-2xl max-w-2xl">
                <Slide>
                  <h1 className="font-semibold tracking-tight text-2xl sm:text-4xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full ">
                    {data.headline}
                  </h1>
                  <p className="text-base leading-relaxed">{data.shortBio}</p>
                </Slide>
                <Slide delay={0.1}>
                  <Social type="social" />
                </Slide>
                <Slide delay={0.1}></Slide>
              </div>
              <Slide delay={0.14}>
                <HeroSvg />
              </Slide>
            </>
          ))}
      </section>
      <Job />
    </main>
  );
}
