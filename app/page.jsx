"use client";

import PersonalIntroduction from "./components/about/PersonalIntroduction";
import ProjectShowcase from "./components/about/ProjectShowcase";
import ProfessionalSummary from "./components/about/ProfessionalSummary";
import HireSection from "./components/about/HireSection";
import OverviewSection from "./components/about/OverviewSection";
import works from "./content/works";
import skills from "./content/skills";
import { useEffect } from "react";

export default function About() {
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
        "⭐️ 75+ stars and growing fast\n" +
        "🔗 Explore: https://syncui.design\n\n" +
        "💬 Like my work? Share your thoughts → https://abhivarde.in/guestbook\n" +
        "❤️ I’d love to connect and build great products together.",
      "color: #ffffff; font-family: monospace; font-size: 12px; font-weight: bold;"
    );
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-5 pt-16 md:pt-18 lg:pt-20">
      <PersonalIntroduction />
      <OverviewSection />
      <ProfessionalSummary works={works} skills={skills} />
      <ProjectShowcase />
      <HireSection />
    </main>
  );
}
