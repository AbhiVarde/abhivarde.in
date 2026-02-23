"use client";

import { useEffect } from "react";
import works from "./content/works";
import skills from "./content/skills";
import Hero from "./components/about/Hero";
import About from "./components/about/About";
import Featured from "./components/about/Featured";
import Experience from "./components/about/Experience";
import Contact from "./components/about/Contact";

const sections = [Hero, About, Featured, Experience, Contact];

export default function AboutPage() {
  useEffect(() => {
    console.log(
      "%c      ___.   .__    .__                        .___          .__        \n" +
        "_____ \\_ |__ |  |__ |__|__  _______ _______  __| _/____      |__| ____  \n" +
        "\\__  \\ | __ \\|  |  \\|  \\  \\/ /\\__  \\\\_  __ \\/ __ |/ __ \\     |  |/    \\ \n" +
        " / __ \\| \\_\\ \\   Y  \\  |\\   /  / __ \\|  | \\/ /_/ \\  ___/     |  |   |  \\\n" +
        "(____  /___  /___|  /__| \\_/  (____  /__|  \\____ |\\___  > /\\ |__|___|  /\n" +
        "     \\/    \\/     \\/               \\/           \\/    \\/  \\/         \\/ \n",
      "color: #ffffff; font-family: monospace; font-size: 11px; font-weight: bold;",
    );

    console.log(
      "%c🚀 Sync UI: loved by developers in 100+ countries\n" +
        "⭐️ 85+ stars and growing fast\n" +
        "🔗 Explore: https://syncui.design\n\n" +
        "💬 Like my work? Share your thoughts → https://abhivarde.in/guestbook\n" +
        "❤️ I'd love to connect and build great products together.",
      "color: #ffffff; font-family: monospace; font-size: 12px; font-weight: bold;",
    );
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-5 pt-16 md:pt-18 animate-fade-in">
      {sections.map((Section, i) => (
        <div
          key={i}
          className="animate-slide-up"
          style={{ animationDelay: `${i * 40}ms` }}
        >
          <Section works={works} skills={skills} />
        </div>
      ))}
    </main>
  );
}
