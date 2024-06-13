import React from "react";
import { KBarResults, useMatches } from "kbar";

const KResults = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="px-3 pt-4 pb-2 text-sm">{item}</div>
        ) : (
          <div className="flex cursor-pointer items-center justify-between rounded-lg px-6 py-2 transition-shadow">
            <div className="flex items-center gap-2">
              {item.icon}
              <span className="text-md">{item.name}</span>
            </div>
            {item.shortcut?.length && (
              <div className="flex items-center justify-center space-x-2">
                {item.shortcut.map((shortcut) => (
                  <div
                    className="bg-[#333] border border-[#333] bg-opacity-30 px-2 py-0.5 text-sm rounded-md transition duration-200"
                    key={shortcut}
                  >
                    {shortcut}
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      }
    />
  );
};

export default KResults;
