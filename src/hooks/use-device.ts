import { useMediaQuery } from "react-responsive";

const useDevice = () => {
  const isMobile = useMediaQuery({ maxWidth: 853, type: "handheld" });
  const isDesktop = useMediaQuery({ minWidth: 854 });

  const isPortrait = useMediaQuery({
    maxWidth: 853,
    orientation: "portrait",
  });

  const isLandscape = useMediaQuery({
    maxWidth: 853,
    orientation: "landscape",
  });

  const orientation: "desktop" | "portrait" | "landscape" =
    isMobile ? (isPortrait ? "portrait" : "landscape") : "desktop";

  return {
    isMobile,
    isPortrait,
    isLandscape,
    isDesktop,
    orientation,
  };
};

export default useDevice;