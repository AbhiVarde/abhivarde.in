"use client";

import {
  LuCode,
  LuGitMerge,
  LuGitPullRequest,
  LuGitPullRequestClosed,
  LuCircleDot,
  LuCircleCheck,
  LuExternalLink,
} from "react-icons/lu";
import { useEffect, useState } from "react";
import Link from "next/link";

const USER = "AbhiVarde";
const LIMIT = 11;
const API = `https://api.github.com/search/issues?q=author:${USER}+-user:${USER}&sort=created&order=desc&per_page=${LIMIT}`;

function repoName(url) {
  return url ? url.replace("https://api.github.com/repos/", "") : "";
}

function getStatus(item) {
  if (item.pull_request) {
    if (item.pull_request.merged_at)
      return { label: "Merged", icon: LuGitMerge, color: "text-purple-400" };
    if (item.state === "open")
      return { label: "Open", icon: LuGitPullRequest, color: "text-green-400" };
    return {
      label: "Closed",
      icon: LuGitPullRequestClosed,
      color: "text-red-400",
    };
  }
  if (item.state === "open")
    return { label: "Issue", icon: LuCircleDot, color: "text-yellow-400" };
  return { label: "Resolved", icon: LuCircleCheck, color: "text-blue-400" };
}

export default function OSS() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setItems(data.items || []))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#FF3B00] p-1.5 rounded-lg">
            <LuCode size={20} color="#FFFFFF" />
          </div>
          <h1 className="text-lg md:text-xl font-medium tracking-wide">
            Open Source
          </h1>
        </div>
        <p className="text-sm md:text-base text-white/60 leading-relaxed">
          Issues and pull requests across open source projects.
        </p>
      </div>

      {loading && (
        <div className="space-y-2">
          {Array.from({ length: LIMIT }).map((_, i) => (
            <div
              key={i}
              className="h-14 rounded-2xl border border-[#2a2a2a] animate-pulse"
            />
          ))}
        </div>
      )}

      {error && (
        <p className="text-sm text-red-400">
          Failed to fetch contributions from GitHub.
        </p>
      )}

      {!loading && !error && (
        <div className="relative overflow-hidden max-h-150">
          <div className="space-y-2">
            {items.map((item) => {
              const { label, icon: Icon, color } = getStatus(item);
              return (
                <Link
                  key={item.id}
                  href={item.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex cursor-pointer items-center justify-between gap-4 px-4 py-3 rounded-2xl border border-[#2a2a2a] hover:bg-[#141414] transition"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <Icon size={16} className={`mt-0.5 shrink-0 ${color}`} />
                    <div className="min-w-0">
                      <p className="text-sm truncate">{item.title}</p>
                      <p className="text-xs text-white/40 font-mono">
                        {repoName(item.repository_url)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/50 shrink-0">
                    {label}
                    <LuExternalLink size={12} />
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-linear-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
          <div className="absolute bottom-5 left-0 right-0 flex justify-center">
            <Link
              href={`https://github.com/${USER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#0a0a0a]/80 backdrop-blur text-xs text-white/60 hover:text-white/90 transition"
            >
              See more
              <LuExternalLink size={11} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
