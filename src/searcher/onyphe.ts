import { ok } from "neverthrow";

import type { SearchableType } from "~/schemas";
import { buildURL } from "~/utils";

import { Base } from "./base";

export class ONYPHE extends Base {
  public baseURL: string;
  public name: string;
  public supportedTypes: SearchableType[] = ["ip"];

  public constructor() {
    super();
    this.baseURL = "https://www.onyphe.io";
    this.name = "ONYPHE";
  }

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
