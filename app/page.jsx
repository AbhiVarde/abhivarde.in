"use client";

import PersonalIntroduction from "./components/about/PersonalIntroduction";
import ProjectShowcase from "./components/about/ProjectShowcase";
import ProfessionalSummary from "./components/about/ProfessionalSummary";
import HireSection from "./components/about/HireSection";
import OverviewSection from "./components/about/OverviewSection";
import works from "./content/works";
import skills from "./content/skills";
import { useEffect, useState } from "react";

export default function About() {
  const [showSections, setShowSections] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    console.log(
      "%c      ___.   .__    .__                        .___          .__        \n" +
        "_____ \\_ |__ |  |__ |__|__  _______ _______  __| _/____      |__| ____  \n" +
        "\\__  \\ | __ \\|  |  \\|  \\  \\/ /\\__  \\\\_  __ \\/ __ |/ __ \\     |  |/    \\ \n" +
        " / __ \\| \\_\\ \\   Y  \\  |\\   /  / __ \\|  | \\/ /_/ \\  ___/     |  |   |  \\\n" +
        "(____  /___  /___|  /__| \\_/  (____  /__|  \\____ |\\___  > /\\ |__|___|  /\n" +
        "     \\/    \\/     \\/               \\/           \\/    \\/  \\/         \\/ \n",
      "color: #ffffff; font-family: monospace; font-size: 11px; font-weight: bold;"
    );

    console.log(
      "%c🚀 Sync UI: loved by developers in 80+ countries\n" +
        "⭐️ 85+ stars and growing fast\n" +
        "🔗 Explore: https://syncui.design\n\n" +
        "💬 Like my work? Share your thoughts → https://abhivarde.in/guestbook\n" +
        "❤️ I'd love to connect and build great products together.",
      "color: #ffffff; font-family: monospace; font-size: 12px; font-weight: bold;"
    );

    const timers = [
      setTimeout(() => setShowSections((prev) => [true, ...prev.slice(1)]), 50),
      setTimeout(
        () => setShowSections((prev) => [prev[0], true, ...prev.slice(2)]),
        150
      ),
      setTimeout(
        () =>
          setShowSections((prev) => [
            ...prev.slice(0, 2),
            true,
            ...prev.slice(3),
          ]),
        250
      ),
      setTimeout(
        () => setShowSections((prev) => [...prev.slice(0, 3), true, prev[4]]),
        350
      ),
      setTimeout(
        () => setShowSections((prev) => [...prev.slice(0, 4), true]),
        450
      ),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-5 pt-16 md:pt-18">
      <div
        className="transition-opacity duration-300"
        style={{ opacity: showSections[0] ? 1 : 0 }}
      >
        <PersonalIntroduction />
      </div>

      <div
        className="transition-opacity duration-300"
        style={{ opacity: showSections[1] ? 1 : 0 }}
      >
        <OverviewSection />
      </div>

      <div
        className="transition-opacity duration-300"
        style={{ opacity: showSections[2] ? 1 : 0 }}
      >
        <ProjectShowcase />
      </div>

      <div
        className="transition-opacity duration-300"
        style={{ opacity: showSections[3] ? 1 : 0 }}
      >
        <ProfessionalSummary works={works} skills={skills} />
      </div>

      <div
        className="transition-opacity duration-300"
        style={{ opacity: showSections[4] ? 1 : 0 }}
      >
        <HireSection />
      </div>
    </main>
  );
}
