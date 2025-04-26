import { ok } from "neverthrow";

import type { SearchableType } from "~/schemas";

import { Base } from "./base";

export class ONYPHE extends Base {
  public name = "ONYPHE";
  public supportedTypes: SearchableType[] = ["ip"];

  /**
   * Search Onyphe by IP with selectable category.
   * @param query IP address
   * @param options { type: "datascan" | "ctiscan" } (default: datascan)
   */
  public searchByIP(query: string, options?: { type?: "datascan" | "ctiscan" }) {
    const type = options?.type || "datascan";
    if (type === "ctiscan") {
      return ok(`https://search.onyphe.io/search?q=category%3Actiscan+ip.dest%3A${encodeURIComponent(query)}`);
    }
    // default: datascan
    return ok(`https://search.onyphe.io/search?q=category%3Adatascan+ip%3A${encodeURIComponent(query)}`);
  }
}
