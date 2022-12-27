import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 403,
  site: "gabsoft",
  domains: ["gabsoft.deco.site"],
});