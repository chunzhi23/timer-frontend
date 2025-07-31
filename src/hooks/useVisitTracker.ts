import { useEffect } from "react";
import Cookies from "js-cookie";
import { commonAxios } from "../util/commonAxios";
import { getExpiryAtMidnight } from "../util/cookie";

const COOKIE_NAME = "cookieId";

interface IVisitResponse {
  id: number;
  cookieId: string;
  visitDate: string;
}

export function useVisitTracker(): void {
  useEffect(() => {
    let initialized = false;

    (async () => {
      if (initialized) return;
      initialized = true;

      try {
        if (Cookies.get(COOKIE_NAME)) return;

        const newCookieId = crypto.randomUUID();
        const visitDate = new Date().toISOString();

        const response = await commonAxios.post<IVisitResponse>("/visit", {
          cookieId: newCookieId,
          visitDate,
        });
        const returnedId = response.data.cookieId;

        Cookies.set(COOKIE_NAME, returnedId, {
          path: "/",
          expires: getExpiryAtMidnight(),
          sameSite: "Lax",
        });
      } catch (err) {
        console.error("Failed to track visit:", err);
      }
    })();
  }, []);
}
