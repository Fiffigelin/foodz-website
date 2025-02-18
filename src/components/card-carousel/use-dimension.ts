import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
	const mediaQuery = window.matchMedia("(max-width: 768px)");
	mediaQuery.addEventListener("change", callback);
	return () => mediaQuery.removeEventListener("change", callback);
};

const getSnapshot = () => window.matchMedia("(max-width: 768px)").matches;

export const useIsMobile = () => useSyncExternalStore(subscribe, getSnapshot);
