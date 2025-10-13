/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleEntry: any | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              !mostVisibleEntry ||
              entry.intersectionRatio > mostVisibleEntry.intersectionRatio
            ) {
              mostVisibleEntry = entry;
            }
          }
        });

        if (mostVisibleEntry) {
          setActiveSection(mostVisibleEntry.target?.id);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0 → 1 com steps de 0.1
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
