import { useState, useEffect } from "react";

const breakPoints: { [key: string]: string } = {
  "2xl": "(min-width: 1536px)",
  xl: "(min-width: 1280px)",
  lg: "(min-width: 1024px)",
  md: "(min-width: 768px)",
  sm: "(min-width: 6406px)",
};

const useMediaQuery = (query: "2xl" | "xl" | "lg" | "md" | "sm") => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(breakPoints[query]);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
