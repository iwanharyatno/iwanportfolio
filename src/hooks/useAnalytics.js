import { useEffect } from "react";
import { analytics, logEvent } from "../config/firebase";

export default function useAnalytics() {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", "homepage");
    }
  }, [location]);
}